import { useState } from "react";
export { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignUp() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: typeof SignUpSchema._type) {
    try {
      const newUser = await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      await newUser.user?.updateProfile({ displayName: data.name });
      router.push("/noticias");
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
    }
  }

  return { onSubmit, submitError };
}
