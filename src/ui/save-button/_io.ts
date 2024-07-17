import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "@/contexts/auth";
import { SaveButtonProps } from "./types";
import { useRouter } from "next/navigation";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export function useSaveButton({ postSlug }: SaveButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { user, preferences, refreshPreferences } = useAuth();

  const isSaved = preferences?.saved_posts?.includes(postSlug);

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
      await refreshPreferences();
      setIsLoading(false);
      toast.success("Post salvo com sucesso!");
    } else {
      setIsLoading(true);
      await new EcrewApiService(httpClientFactory()).removeSavedPost({
        postSlug,
        authorization: (await user?.getIdToken()) || "",
      });
      await refreshPreferences();
      setIsLoading(false);
      toast.success("Post excluído com sucesso!");
    }
  }

  return { handleSave, isSaved, isLoading };
}
