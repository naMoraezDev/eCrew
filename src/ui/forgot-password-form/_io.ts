import { toast } from "sonner";
import { useLoading } from "@/contexts/loading";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { ForgotPasswordSchema } from "@/schemas/forgot-password.shema";

export function useForgotPasswordForm() {
  const { setIsLoading } = useLoading();

  async function onSubmit(data: typeof ForgotPasswordSchema._type) {
    setIsLoading(true);
    try {
      await firebaseClient.auth().sendPasswordResetEmail(data.email);
      setIsLoading(false);
    } catch (error: any) {
      toast.error(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { onSubmit };
}
