"use client";

import { useCookiesAccept } from "./_io";
import { FaCookie } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FaCookieBite } from "react-icons/fa6";

export function CookiesAcceptView() {
  const { open, accept, handleClose } = useCookiesAccept();

  return (
    <section
      className={`
        ${open ? "translate-y-0" : "translate-y-[100%]"}
        fixed bottom-0 left-0 w-full flex justify-center z-20 bg-zinc-900 p-6 rounded-t-xl duration-500
      `}
    >
      <div className="w-full max-w-[1000px] mx-auto px-4 flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <h3 className="font-kanit font-bold text-xl flex gap-4 items-center">
            <FaCookie /> Vai um cookie ai?
          </h3>
          <button type="button" onClick={handleClose}>
            <IoIosClose size={32} />
          </button>
        </div>
        <p className="text-sm">
          Este site utiliza cookies para melhorar a sua experiência de
          navegação. Ao continuar a usar este site, você concorda com o uso de
          cookies de acordo com nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="font-kanit font-medium text-violet-500"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <button
          onClick={accept}
          className="font-kanit font-medium text-base bg-violet-500 text-violet-500 bg-opacity-10 rounded-full px-4 py-1 w-fit flex items-center gap-2 self-end"
        >
          aceito hmm <FaCookieBite className="text-zinc-50" />
        </button>
      </div>
    </section>
  );
}
