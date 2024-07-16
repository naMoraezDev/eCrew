import { toast } from "sonner";
import { useAuth } from "@/contexts/auth";
import { SaveButtonProps } from "./types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export function useSaveButton({ postSlug }: SaveButtonProps) {
  const router = useRouter();
  const { user, preferences } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(
    Boolean(preferences?.saved_posts?.includes(postSlug))
  );

  useEffect(() => {
    if (!preferences) {
      setIsSaved(false);
      return;
    }
    setIsSaved(Boolean(preferences.saved_posts?.includes(postSlug)));
  }, [preferences, postSlug]);

  async function handleSave() {
    if (!user) {
      toast.error("Você precisa estar logado para salvar posts.");
      router.push("/login");
    }
    if (!isSaved) {
      setIsLoading(true);
      await new EcrewApiService(httpClientFactory()).pushToSavedPosts({
        postSlug,
        authorization: (await user?.getIdToken()) || "",
      });
      setIsSaved(true);
      setIsLoading(false);
      toast.success("Post salvo com sucesso!");
    } else {
      setIsLoading(true);
      await new EcrewApiService(httpClientFactory()).removeSavedPost({
        postSlug,
        authorization: (await user?.getIdToken()) || "",
      });
      setIsSaved(false);
      setIsLoading(false);
      toast.success("Post excluído com sucesso!");
    }
  }

  return { handleSave, isSaved, isLoading };
}
