import { useAuth } from "@/contexts/auth";
import { SaveButtonProps } from "./types";
import { useEffect, useState } from "react";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export function useSaveButton({ postSlug }: SaveButtonProps) {
  const { user, preferences } = useAuth();
  const [isSaved, setIsSaved] = useState(
    Boolean(preferences?.saved_posts?.includes(postSlug))
  );

  useEffect(() => {
    if (!preferences) return;
    setIsSaved(Boolean(preferences.saved_posts?.includes(postSlug)));
  }, [preferences, postSlug]);

  async function handleSave() {
    if (!isSaved) {
      setIsSaved(true);
      await new EcrewApiService(httpClientFactory()).updateUserPreferences({
        authorization: (await user?.getIdToken()) || "",
        userPreferences: {
          saved_posts: [...(preferences?.saved_posts || []), postSlug],
        },
      });
    } else {
      setIsSaved(false);
      await new EcrewApiService(httpClientFactory()).updateUserPreferences({
        authorization: (await user?.getIdToken()) || "",
        userPreferences: {
          saved_posts: [
            ...(preferences?.saved_posts?.filter((slug) => slug !== postSlug) ||
              []),
          ],
        },
      });
    }
  }

  return { handleSave, isSaved };
}
