import { useState } from "react";

export function useLogin() {
  const [method, setMethod] = useState<"sign-in" | "sign-up">("sign-in");

  return {
    method,
    setMethod,
  };
}
