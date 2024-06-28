import { toast } from "sonner";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export function useSProSubscription() {
  const { user } = useAuth();
  const router = useRouter();
  const { setIsLoading } = useLoading();

  async function handleSubscribe() {
    setIsLoading(true);
    if (!user) {
      setIsLoading(false);
      toast.error("Você precisa estar logado para assinar.");
      router.push("/login");
      return;
    }
    try {
      const idToken = await user.getIdToken();
      const response = await new EpostsApiService(
        new FetchHttpClientAdapter()
      ).checkout(idToken);
      const { sessionUrl } = response;
      setIsLoading(false);
      window.location.href = sessionUrl;
    } catch (error) {
      setIsLoading(false);
      console.log(`Error on handleSubscribe: ${error}`);
      toast.error("Algo deu errado. Por favor, tente novamente mais tarde.");
    }
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return { handleSubscribe, scrollToBottom };
}
