// Path: /api/create-checkout-session.ts
import Stripe from 'stripe';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const { lineItems, customerEmail, registrationData } = req.body;

      // Note: Stripe metadata values are limited to 500 characters.
      // If registrationData becomes too large, this may fail.
      // A more robust solution for large data would be to store it
      // in a temporary database and pass only an ID in the metadata.
      const metadataPayload = JSON.stringify(registrationData);
      if (metadataPayload.length > 500) {
        console.error("Error: Registration data is too long for Stripe metadata.");
        return res.status(400).json({ 
          statusCode: 400, 
          message: "Registration data is too large. Please contact support." 
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        customer_email: customerEmail,
        success_url: `${req.headers.origin || 'https://chabad-opera.com'}/?payment_success=true`,
        cancel_url: `${req.headers.origin || 'https://chabad-opera.com'}/?payment_canceled=true`,
        metadata: {
          registrationData: metadataPayload,
        },
      });

      res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      console.error("Stripe Error:", err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
