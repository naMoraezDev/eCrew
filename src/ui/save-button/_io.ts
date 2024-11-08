import { useState } from "react";
import { useAuth } from "@/contexts/auth";
import { SaveButtonProps } from "./types";
import { useRouter } from "next/navigation";

export function useSaveButton({ postSlug }: SaveButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  return { isLoading };
}
