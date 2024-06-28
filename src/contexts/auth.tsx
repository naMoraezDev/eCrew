"use client";

import nookies from "nookies";
import { EpostsApiService } from "@/services/eposts-api.service";
import { firebaseClient } from "@/services/firebase/firebase-client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserPreferences } from "@/services/types/user-preferences.types";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

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
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "id-token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        setPreferences(
          await new EpostsApiService(
            new FetchHttpClientAdapter()
          ).getUserPreferences(token)
        );
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
