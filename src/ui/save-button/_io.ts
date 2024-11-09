import { SaveButtonProps } from "./types";
import { useEffect, useState } from "react";

export function useSaveButton({ postSlug }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedList: string[] = JSON.parse(
      localStorage.getItem("saved-list") ?? "[]"
    );
    if (savedList && savedList.includes(postSlug)) {
      setIsSaved(true);
    }
  }, [postSlug]);

  function savePost() {
    const savedList: string[] = JSON.parse(
      localStorage.getItem("saved-list") ?? "[]"
    );
    if (savedList && !savedList.includes(postSlug)) {
      localStorage.setItem(
        "saved-list",
        JSON.stringify([...savedList, postSlug])
      );
      setIsSaved(true);
    }
  }

  function unsevePost() {
    const savedList: string[] = JSON.parse(
      localStorage.getItem("saved-list") ?? "[]"
    );
    if (savedList && savedList.includes(postSlug)) {
      localStorage.setItem(
        "saved-list",
        JSON.stringify([...savedList.filter((item) => item !== postSlug)])
      );
      setIsSaved(false);
    }
  }

  return { isSaved, savePost, unsevePost };
}
