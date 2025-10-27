// Этот код должен находиться на сервере (в Vercel/Netlify это будет /api/create-checkout-session.ts)
// Установите Stripe для Node.js: npm install stripe

import Stripe from 'stripe';

// Инициализируем Stripe с вашим СЕКРЕТНЫМ ключом, который вы добавите в переменные окружения
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

// Эта функция будет обрабатывать запросы от вашего сайта
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { lineItems, customerEmail, registrationData } = req.body;

      // Создаем сессию оплаты в Stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        customer_email: customerEmail,
        // URL, куда пользователь попадет после успешной оплаты
        success_url: `${req.headers.origin}/?payment_success=true`,
        // URL, куда пользователь попадет, если отменит оплату
        cancel_url: `${req.headers.origin}/book-shabbat?payment_canceled=true`,
        // Добавляем все данные о регистрации в метаданные Stripe
        // Это позволит нам получить их на следующем шаге для отправки email
        metadata: {
          registrationData: JSON.stringify(registrationData),
        },
      });

      // Отправляем ID сессии обратно на сайт
      res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      console.error("Stripe Error:", err.message);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}