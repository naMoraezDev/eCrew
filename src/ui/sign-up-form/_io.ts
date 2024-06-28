import { useState } from "react";
import { SignUpFormProps } from "./types";
export { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignUp({ setIsLoading }: SignUpFormProps) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: typeof SignUpSchema._type) {
    setIsLoading(true);
    try {
      const newUser = await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      await newUser.user?.updateProfile({ displayName: data.name });
      setIsLoading(false);
      router.push("/noticias");
    } catch (error: any) {
      setSubmitError(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { onSubmit, submitError };
}
