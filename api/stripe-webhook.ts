// Этот код должен находиться на сервере (в Vercel/Netlify это будет /api/stripe-webhook.ts)
// Для отправки email нужен сервис, например SendGrid (npm install @sendgrid/mail)

import Stripe from 'stripe';
// import sgMail from '@sendgrid/mail'; // Раскомментируйте, когда настроите SendGrid

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });
// sgMail.setApiKey(process.env.SENDGRID_API_KEY!); // Раскомментируйте и добавьте ключ SendGrid

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      // Проверяем, что запрос действительно пришел от Stripe
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err: any) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Обрабатываем событие `checkout.session.completed`
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const registrationData = JSON.parse(session.metadata!.registrationData);
      
      // =======================================================
      // ДЕЙСТВИЕ 1: ОТПРАВКА EMAIL ПОЛЬЗОВАТЕЛЮ
      // =======================================================
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
      /*
      await sgMail.send({
        to: customerEmail,
        from: 'your-verified-email@chabad-opera.com', // Ваш email, подтвержденный в SendGrid
        subject: `Your Shabbat Booking Confirmation for ${registrationData.shabbatInfo.parsha}`,
        html: emailHtmlToCustomer,
      });
      */
      console.log(`(СИМУЛЯЦИЯ) Email отправлен клиенту: ${customerEmail}`);


      // =======================================================
      // ДЕЙСТВИЕ 2: ОТПРАВКА EMAIL АДМИНИСТРАТОРУ
      // =======================================================
      /*
      await sgMail.send({
          to: 'admin@chabad-opera.com', // Email администратора
          from: 'noreply@chabad-opera.com',
          subject: `New Shabbat Registration: ${registrationData.customerDetails.lastName}`,
          html: `<pre>${JSON.stringify(registrationData, null, 2)}</pre>`,
      });
      */
      console.log(`(СИМУЛЯЦИЯ) Email отправлен администратору.`);


      // =======================================================
      // ДЕЙСТВИЕ 3: СОХРАНЕНИЕ ДАННЫХ
      // =======================================================
      // Здесь вы можете добавить код для сохранения `registrationData`
      // в Google Sheets, Firebase, или любую другую базу данных.
      console.log('Данные о заказе готовы к сохранению в базу данных:', registrationData);
    }
    
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}