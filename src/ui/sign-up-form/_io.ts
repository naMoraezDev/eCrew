import { toast } from "sonner";
export { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

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
      await new EcrewApiService(httpClientFactory()).createUserPreferences({
        authorization: (await newUser.user?.getIdToken()) || "",
        userPreferences: {
          newsletter: false,
        },
      });
      setIsLoading(false);
      router.push("/noticias");
    } catch (error: any) {
      toast.error(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { onSubmit };
}
