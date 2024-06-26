import { cookies } from "next/headers";
import { main } from "@/services/db/conn";
import { stripe } from "@/services/stripe/stripe";
import { firebaseAdmin } from "@/services/firebase/firebase-admin";

export async function GET(request: Request) {
  main();
  const cookieStore = cookies();
  const idToken = cookieStore.get("id-token")?.value;
  const decodedToken = await firebaseAdmin
    .auth()
    .verifyIdToken(idToken || "")
    .catch(() => null);
  const { searchParams } = new URL(request.url);
  const checkoutSession = await stripe.checkout.sessions.create({
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

  return Response.json({});
}
