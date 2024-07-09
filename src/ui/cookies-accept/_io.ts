import nookies from "nookies";
import { useEffect, useState } from "react";

export function useCookiesAccept() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!nookies.get()["cookies-accepted"]) {
      setOpen(true);
    }
  }, []);

  function handleClose() {
    setOpen(false);
  }

  function accept() {
    nookies.set(null, "cookies-accepted", "true", {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });
    setOpen(false);
  }

  return { open, accept, handleClose };
}
