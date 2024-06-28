import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { SignInSchema } from "@/schemas/sign-in.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignIn() {
  const router = useRouter();
  const { setIsLoading } = useLoading();
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: typeof SignInSchema._type) {
    setIsLoading(true);
    try {
      await firebaseClient
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setIsLoading(false);
      router.push("/noticias");
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { onSubmit, submitError };
}
