import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import stripe from '@/lib/stripe';

export async function POST(req, res) {
  const headersList = headers();
  const { cartItems } = await req.json();
  const cartItemsArray = Object.values(cartItems);

  const lineItems = cartItemsArray.map(item => {
    const img = item.image[0].asset._ref;
    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');

    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [newImage],
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled:true,
        minimum: 1,
      },
      quantity: item.quantity
    }
  });

  try {
    const session = await stripe.checkout.sessions.create({
      submit_type: 'pay',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1OgQelFeUkzAPZPEbhjXwc3U' },
        { shipping_rate: 'shr_1OgQflFeUkzAPZPEsy1ZjkJF' },
      ],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${headersList.get('origin')}/success`,
      cancel_url: `${headersList.get('origin')}/canceled`
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Error creating checkout session' });
  }
}
