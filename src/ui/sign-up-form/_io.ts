import { toast } from "sonner";
export { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignUp() {
  const router = useRouter();
  const { setIsLoading } = useLoading();

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
      toast.error(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { onSubmit };
}
