import { toast } from "sonner";
import { useState } from "react";
import { EpostsApiService } from "@/services/eposts-api.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export function useNewsletter() {
  const [email, setEmail] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function handleSubscribe() {
    try {
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        toast.error("Por favor, insira um e-mail válido.");
        return;
      }
      await new EpostsApiService(
        new FetchHttpClientAdapter()
      ).subscribeOnNewsletter(email);
      toast.success("Inscrição concluída. Confira sua caixa de entrada.");
    } catch {
      toast.error("Algo deu errado. Por favor, tente novamente mais tarde.");
    }
  }

  return { email, handleEmailChange, handleSubscribe };
}
