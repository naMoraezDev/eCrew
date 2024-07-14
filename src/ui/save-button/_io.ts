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
  const [isSaved, setIsSaved] = useState(
    Boolean(preferences?.saved_posts?.includes(postSlug))
  );

  useEffect(() => {
    if (!preferences) return;
    setIsSaved(Boolean(preferences.saved_posts?.includes(postSlug)));
  }, [preferences, postSlug]);

  async function handleSave() {
    if (!user) {
      toast.error("Você precisa estar logado para salvar posts.");
      router.push("/login");
    }
    if (!isSaved) {
      setIsSaved(true);
      await new EcrewApiService(httpClientFactory()).pushToSavedPosts({
        postSlug,
        authorization: (await user?.getIdToken()) || "",
      });
    } else {
      setIsSaved(false);
      await new EcrewApiService(httpClientFactory()).removeSavedPost({
        postSlug,
        authorization: (await user?.getIdToken()) || "",
      });
    }
  }

  return { handleSave, isSaved };
}
