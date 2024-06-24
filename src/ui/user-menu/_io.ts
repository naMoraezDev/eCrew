import { firebaseClient } from "@/services/firebase/firebase-client";

export function useUserMenu() {
  async function signOut() {
    await firebaseClient.auth().signOut();
  }

  return { signOut };
}
