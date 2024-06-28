import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSocialLogin() {
  const router = useRouter();
  const { setIsLoading } = useLoading();
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      await firebaseClient.auth().signInWithPopup(provider);
      setIsLoading(false);
      router.push("/noticias");
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { loginWithGoogle, submitError };
}
