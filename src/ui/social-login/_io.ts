import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSocialLogin() {
  const router = useRouter();
  const { setIsLoading } = useLoading();

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      await firebaseClient.auth().signInWithPopup(provider);
      router.refresh();
      setIsLoading(false);
      router.push("/noticias");
    } catch (error: any) {
      toast.error(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { loginWithGoogle };
}
