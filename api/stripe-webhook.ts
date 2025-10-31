// Path: /api/stripe-webhook.ts
import Stripe from 'stripe';
import sgMail from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';
// FIX: Import Buffer to resolve 'Cannot find name' error in the Vercel serverless function environment.
import { Buffer } from 'buffer';

// Initialize APIs
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Helper function to buffer the request stream
async function buffer(readable: VercelRequest) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// Vercel/Next.js config to disable body parsing, which is required for Stripe webhook verification
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature']!;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    let event: Stripe.Event;

    try {
      // Verify the request came from Stripe
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook Error: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      if (!session.metadata || !session.metadata.registrationData) {
        console.error('Webhook received checkout.session.completed event without required metadata.');
        return res.status(400).send('Missing metadata in session.');
      }
      
      const registrationData = JSON.parse(session.metadata.registrationData);

      const fromEmail = process.env.SENDGRID_FROM_EMAIL;
      const toEmail = process.env.SENDGRID_TO_EMAIL;
      const sendgridApiKey = process.env.SENDGRID_API_KEY;

      if (!fromEmail || !toEmail || !sendgridApiKey) {
        console.error("SendGrid environment variables are not set. Cannot send emails.");
        return res.status(200).json({ received: true, emailStatus: "failed_configuration" });
      }

      // Action 1: Send confirmation email to the customer
      const customerEmail = registrationData.customerDetails.email;
      const emailHtmlToCustomer = `
        <h1>Thank you for your booking!</h1>
        <p>Dear ${registrationData.customerDetails.firstName},</p>
        <p>Your registration for <strong>Shabbat ${registrationData.shabbatInfo.parsha} (${registrationData.shabbatInfo.dates})</strong> is confirmed.</p>
        <p><strong>Location:</strong> ${registrationData.address}</p>
        <p><strong>Shabbat Begins:</strong> ${registrationData.shabbatInfo.begins}</p>
        <h3>Your Order:</h3>
        <ul>
            ${registrationData.orderedItems.map((item: any) => `<li>${item.quantity} x ${item.name} - €${item.price}</li>`).join('')}
        </ul>
        <h3>Total: €${registrationData.totalAmount}</h3>
        <p>We look forward to seeing you!</p>
      `;
      
      try {
        await sgMail.send({
          to: customerEmail,
          from: fromEmail,
          subject: `Your Shabbat Booking Confirmation for ${registrationData.shabbatInfo.parsha}`,
          html: emailHtmlToCustomer,
        });
        console.log(`Confirmation email sent to customer: ${customerEmail}`);
      } catch (error: any) {
        console.error("Error sending customer email with SendGrid:", error.response?.body || error.message);
      }

      // Action 2: Send notification email to the administrator
      const emailHtmlToAdmin = `
        <h1>New Shabbat Registration</h1>
        <p>A new registration has been made by ${registrationData.customerDetails.firstName} ${registrationData.customerDetails.lastName}.</p>
        <h3>Details:</h3>
        <pre>${JSON.stringify(registrationData, null, 2)}</pre>
      `;
      
      try {
        await sgMail.send({
            to: toEmail,
            from: fromEmail,
            subject: `New Shabbat Registration: ${registrationData.customerDetails.lastName}`,
            html: emailHtmlToAdmin,
        });
        console.log(`Admin notification email sent to: ${toEmail}`);
      } catch (error: any) {
         console.error("Error sending admin email with SendGrid:", error.response?.body || error.message);
      }

      // Action 3: (Future) Save data to a database
      console.log('Order data processed successfully for:', registrationData.customerDetails.email);
    }
    
    // Acknowledge the event
    res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}