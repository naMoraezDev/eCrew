"use client";

import nookies from "nookies";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserPreferences } from "@/services/types/user-preferences.types";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export const AuthContext = createContext<{
  user: firebaseClient.User | null;
  preferences: UserPreferences | null;
}>({
  user: null,
  preferences: null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    async function getUserPreferences() {
      const cookies = nookies.get(undefined);
      const idToken = cookies["id-token"];
      if (idToken) {
        const userPreferences = await new EcrewApiService(httpClientFactory())
          .getUserPreferences(idToken)
          .catch(() => null);
        if (userPreferences) {
          setPreferences(userPreferences);
        }
      }
    }
    getUserPreferences();
  }, []);

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        setPreferences(null);
        nookies.set(undefined, "id-token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        const userPreferences = await new EcrewApiService(httpClientFactory())
          .getUserPreferences(token)
          .catch(() => null);
        setPreferences(userPreferences);
        nookies.set(undefined, "id-token", token, { path: "/" });
      }
    });
  }, []);

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, preferences }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
