import { useState } from "react";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignUp() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: typeof SignUpSchema._type) {
    try {
      await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
    }
  }

  return { onSubmit, submitError };
}
