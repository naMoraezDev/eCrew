import { useRouter } from "next/navigation";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useUserMenu() {
  const router = useRouter();
  function signIn() {
    const redirectUri = window.location.href;
    const authUrl = process.env.NEXT_PUBLIC_AUTH_URL;
    const clientId = process.env.NEXT_PUBLIC_AUTH_CLIENT_ID;
    window.location.href = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&state=AAA`;
  }
  async function signOut() {
    await firebaseClient.auth().signOut();
    router.refresh();
  }

  return { signIn, signOut };
}
