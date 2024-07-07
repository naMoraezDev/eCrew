"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { useSProSubscription } from "./_io";
import { ProSubscriptionProps } from "./types";
import { BasicHeader } from "@/ui/basic-header";
import eCrewLogo from "@/assets/images/e_posts_logo.svg";
import { SubscriptionCard } from "@/ui/subscription-card";
import background from "@/assets/images/e-sports-background.jpg";

export function ProSubscriptionView({ isDesktop }: ProSubscriptionProps) {
  const { scrollToBottom, handleSubscribe } = useSProSubscription();

  return (
    <div className="overflow-x-clip">
      <BasicHeader />
      <section
        className={`${styles["text-focus-in"]} w-full h-screen flex flex-col justify-center items-center relative`}
      >
        <div className="w-px h-full bg-transparent mb-10" />
        <div className="flex flex-col gap-4 text-center max-w-sm">
          <Image
            priority
            width={150}
            height={150}
            src={eCrewLogo}
            alt="eCrew logo"
            className="self-center"
          />
          <h1 className="text-5xl font-kanit">
            eCrew <span className="font-bold text-violet-500">PRO</span>
          </h1>
          <p>
            Notícias exclusivas, sem anúncios e suporte prioritário. Assine
            agora!
          </p>
          <button
            onClick={scrollToBottom}
            className="bg-violet-500 bg-opacity-10 px-24 self-center py-2 rounded-3xl text-violet-500 font-bold w-fit"
          >
            Detalhes
          </button>
        </div>
        <div className="w-px h-full bg-zinc-800 mt-10" />
        <div className="w-full h-screen absolute top-0 left-0 -z-10">
          <div className="relative h-full">
            <Image
              priority
              src={background}
              alt="e-sports background"
              className="size-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-zinc-800 bg-opacity-50 backdrop-blur-md" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      <section
        className={`${!isDesktop && "mb-40"} ${
          styles.container
        } w-full h-screen flex flex-col gap-6 justify-center items-center relative`}
      >
        <div className="w-px h-full bg-zinc-800 mb-6" />
        <div className="flex flex-col gap-4">
          <div className={styles["roll-in-blurred-left"]}>
            <SubscriptionCard handleSubscribe={handleSubscribe} />
          </div>
          <div className={styles["roll-in-blurred-right"]}>
            <SubscriptionCard pro handleSubscribe={handleSubscribe} />
          </div>
        </div>
        <button
          onClick={handleSubscribe}
          className="bg-violet-500 bg-opacity-10 px-10 self-center py-2 rounded-3xl text-violet-500 font-bold"
        >
          Faça mais com o PRO, assine agora
        </button>
        <div className="w-px h-full bg-transparent mt-6" />
      </section>
    </div>
  );
}
