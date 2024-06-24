import { useState } from "react";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSocialLogin() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function loginWithGoogle() {
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      await firebaseClient.auth().signInWithPopup(provider);
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
    }
  }

  return { loginWithGoogle, submitError };
}
