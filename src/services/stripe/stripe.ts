import { Stripe } from "stripe";

export const stripe = new Stripe(process.env.PRIVATE_STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "labcompy",
    version: "1.0.0",
  },
});
