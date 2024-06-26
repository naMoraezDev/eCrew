import { cookies } from "next/headers";
import { main } from "@/services/db/conn";
import { stripe } from "@/services/stripe/stripe";
import { firebaseAdmin } from "@/services/firebase/firebase-admin";

export async function POST() {
  main();
  const cookieStore = cookies();
  const idToken = cookieStore.get("id-token")?.value;
  const decodedIdToken = await firebaseAdmin
    .auth()
    .verifyIdToken(idToken || "")
    .catch(() => null);
  const customer = await stripe.customers.create({
    email: decodedIdToken?.email,
  });
  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customer.id,
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    line_items: [
      {
        quantity: 1,
        price: "prod_QMOpdvrjVULFL4",
      },
    ],
    mode: "subscription",
    allow_promotion_codes: true,
    cancel_url: `http://localhost:3000/noticias`,
    success_url: `http://localhost:3000/noticias`,
  });

  return Response.json({ sessionId: checkoutSession.id }, { status: 200 });
}
