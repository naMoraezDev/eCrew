"use client";

import nookies from "nookies";
import { useSearchParams } from "next/navigation";
import { AuthService } from "@/services/auth/auth.service";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { createContext, useContext, useEffect, useState } from "react";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export const AuthContext = createContext<{
  user: firebaseClient.User | null;
}>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  useEffect(() => {
    const authorization_token = searchParams.get("authorization_token") ?? "";
    async function signIn() {
      const response = await new AuthService(httpClientFactory())
        .getAccessToken({
          body: { authorization_token },
        })
        .catch(() => null);
      const access_token = response?.access_token;
      if (access_token) {
        await firebaseClient.auth().signInWithCustomToken(access_token);
      }
    }
    signIn();
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "id-token", "", { path: "/" });
      } else {
        setUser(user);
        const token = await user.getIdToken();
        nookies.set(undefined, "id-token", token, { path: "/" });
      }
    });
  }, [searchParams]);

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
