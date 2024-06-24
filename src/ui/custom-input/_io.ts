import { useState } from "react";

export function useCustomInput() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return {
    showPassword,
    toggleShowPassword,
  };
}
