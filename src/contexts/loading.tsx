"use client";

import { LoadSpinner } from "@/ui/load-spinner";
import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext<{
  setIsLoading: (isLoading: boolean) => void;
}>({
  setIsLoading: () => {},
});

export function LoadingProvider({ children }: any) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  return (
    <LoadingContext.Provider value={{ setIsLoading }}>
      {isLoading && <LoadSpinner />}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
