import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export function useSocialLogin() {
  const router = useRouter();
  const { setIsLoading } = useLoading();

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      const user = await firebaseClient.auth().signInWithPopup(provider);
      if (user.additionalUserInfo?.isNewUser) {
        await new EcrewApiService(httpClientFactory()).createUserPreferences({
          authorization: (await user.user?.getIdToken()) || "",
          userPreferences: {
            newsletter: false,
          },
        });
      }
      setIsLoading(false);
      router.push("/noticias");
    } catch (error: any) {
      toast.error(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { loginWithGoogle };
}
