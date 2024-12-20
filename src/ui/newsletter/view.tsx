"use client";

import { useNewsletter } from "./_io";
import { NewsletterProps } from "./types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterView({ isDesktop }: NewsletterProps) {
  const { email, handleEmailChange, handleSubscribe } = useNewsletter();

  return (
    <section
      className={`
        ${isDesktop ? "px-10 py-4 rounded-lg" : "p-4"}
        w-full flex mx-auto bg-zinc-900 bg-opacity-50
      `}
    >
      <div className="flex flex-col gap-3 mx-auto">
        <h3 className="font-kanit font-bold text-xl">
          Inscreva-se para receber novidades
        </h3>
        <p className="text-sm max-w-sm">
          Fique por dentro das últimas notícias, análises e atualizações do
          mundo dos jogos eletrônicos.
        </p>
        <div
          className={`
            ${!isDesktop ? "flex flex-col gap-y-3" : "flex space-x-2"}
            w-full max-w-sm items-center 
          `}
        >
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Seu melhor e-mail"
            className="focus:!ring-inset !ring-transparent text-zinc-900"
          />
          <Button
            type="button"
            onClick={handleSubscribe}
            className={`
              ${!isDesktop && "w-full"}
              bg-violet-500 bg-opacity-10 text-violet-500 hover:bg-opacity-30 duration-300
            `}
          >
            Inscrever-se
          </Button>
        </div>
      </div>
    </section>
  );
}
