import { useState } from "react";
import { useRouter } from "next/navigation";

export function useSearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return;
    router.push(`/noticias/busca?term=${value}`);
  }

  return { value, handleChange, handleSubmit };
}
