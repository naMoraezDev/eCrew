import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/navigation";
import { getStripeJs } from "@/services/stripe/stripe-js";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export function useSubscriptionCard() {
  const { user } = useAuth();
  const router = useRouter();

  async function handleSubscribe() {
    if (!user) {
      router.push("/login");
      return;
    }
    try {
      const idToken = await user.getIdToken();
      const response = await new EpostsApiService(
        new FetchHttpClientAdapter()
      ).checkout(idToken);
      const { sessionId } = response;
      const stripe = await getStripeJs();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log(`Error on handleSubscribe: ${error}`);
    }
  }

  return { handleSubscribe };
}
