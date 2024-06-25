import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { firebaseAdmin } from "@/services/firebase/firebase-admin";

export async function verifyLogin() {
  const cookieStore = cookies();
  const idToken = cookieStore.get("id-token")?.value;
  const decodedIdToken = await firebaseAdmin
    .auth()
    .verifyIdToken(idToken || "")
    .catch(() => null);
  if (decodedIdToken) redirect("/noticias");
}
