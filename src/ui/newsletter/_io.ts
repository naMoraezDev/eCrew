import { toast } from "sonner";
import { useState } from "react";
import { useLoading } from "@/contexts/loading";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export function useNewsletter() {
  const { setIsLoading } = useLoading();
  const [email, setEmail] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function handleSubscribe() {
    setIsLoading(true);
    try {
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        setIsLoading(false);
        toast.error("Por favor, insira um e-mail válido.");
        return;
      }
      await new EcrewApiService(
        new FetchHttpClientAdapter()
      ).subscribeOnNewsletter(email);
      setIsLoading(false);
      toast.success("Inscrição concluída. Confira sua caixa de entrada.");
    } catch {
      setIsLoading(false);
      toast.error("Algo deu errado. Por favor, tente novamente mais tarde.");
    }
  }

  return { email, handleEmailChange, handleSubscribe };
}
