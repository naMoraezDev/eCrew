"use client";

import nookies from "nookies";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserPreferences } from "@/services/types/user-preferences.types";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export const AuthContext = createContext<{
  cleanPreferences: () => void;
  user: firebaseClient.User | null;
  preferences: UserPreferences | null;
}>({
  user: null,
  preferences: null,
  cleanPreferences: () => {},
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "id-token", "", { path: "/" });
      } else {
        setUser(user);
        const token = await user.getIdToken();
        nookies.set(undefined, "id-token", token, { path: "/" });
        const userPreferences = await new EcrewApiService(httpClientFactory())
          .getUserPreferences(token)
          .catch(() => null);
        setPreferences(userPreferences);
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

  function cleanPreferences() {
    setPreferences(null);
  }

  return (
    <AuthContext.Provider value={{ user, preferences, cleanPreferences }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
