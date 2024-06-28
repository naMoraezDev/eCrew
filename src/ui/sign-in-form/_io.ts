import { useState } from "react";
import { SignInFormProps } from "./types";
import { useRouter } from "next/navigation";
import { SignInSchema } from "@/schemas/sign-in.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignIn({ setIsLoading }: SignInFormProps) {
  const router = useRouter();
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
