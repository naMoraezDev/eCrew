import { useRouter } from "next/navigation";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useUserMenu() {
  const router = useRouter();
  async function signOut() {
    await firebaseClient.auth().signOut();
    router.refresh();
  }

  return { signOut };
}
