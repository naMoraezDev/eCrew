import { useState } from "react";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [method, setMethod] = useState<"sign-in" | "sign-up">("sign-in");

  return {
    method,
    setMethod,
    isLoading,
    setIsLoading,
  };
}
