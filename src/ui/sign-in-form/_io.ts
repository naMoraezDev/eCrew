import { useState } from "react";
import { SignInSchema } from "@/schemas/sign-in.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignIn() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: typeof SignInSchema._type) {
    try {
      await firebaseClient
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
    }
  }

  return { onSubmit, submitError };
}
