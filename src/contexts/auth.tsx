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
    async function signIn() {
      const authorization_token = nookies.get()["authorization_token"];
      if (authorization_token) {
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
      /* const url = window.location.href;
      const regex = /\?(.*)/; // match query string
      const match = url.match(regex);
      if (!match) return;
      const unwantedParams = match[1]
        .split("&")
        .filter((p) => /authorization_token|state/.test(p));
      if (!unwantedParams.length) return;
      const params = match[1]
        .split("&")
        .filter((p) => !/authorization_token|state/.test(p));
      const updatedUrl =
        `${window.location.origin}${window.location.pathname}` +
        (params.length ? "?" : "") +
        params.join("&");
      window.location.href = updatedUrl; */
    }
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        signIn();
        setUser(null);
        nookies.set(undefined, "authorization_token", "", { path: "/" });
      } else {
        setUser(user);
        const token = await user.getIdToken();
        nookies.set(undefined, "authorization_token", token, { path: "/" });
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
