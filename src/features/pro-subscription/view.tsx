"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { useProSubscription } from "./_io";
import { BasicHeader } from "@/ui/basic-header";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import { SubscriptionCard } from "@/ui/subscription-card";

export function ProSubscriptionView() {
  const { scrollToBottom } = useProSubscription();

  return (
    <div className="overflow-x-clip">
      <BasicHeader />
      <section
        className={`${styles["text-focus-in"]} w-full h-screen flex flex-col justify-center items-center`}
      >
        <div className="w-px h-full bg-transparent mb-10" />
        <div className="flex flex-col gap-4 text-center max-w-sm">
          <Image
            priority
            width={150}
            height={150}
            src={ePostsLogo}
            alt="ePosts logo"
            className="self-center"
          />
          <h1 className="text-5xl font-kanit">
            ePosts <span className="font-bold text-violet-500">PRO</span>
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
      </section>
      <section
        className={`${styles.container} w-full h-screen flex flex-col gap-6 justify-center items-center`}
      >
        <div className="w-px h-full bg-zinc-800 mb-6" />
        <div className="flex gap-4">
          <div className={styles["roll-in-blurred-left"]}>
            <SubscriptionCard />
          </div>
          <div className={styles["roll-in-blurred-right"]}>
            <SubscriptionCard pro />
          </div>
        </div>
        <button className="bg-violet-500 bg-opacity-10 px-10 self-center py-2 rounded-3xl text-violet-500 font-bold">
          Faça mais com o PRO, assine agora
        </button>
        <div className="w-px h-full bg-transparent mt-6" />
      </section>
    </div>
  );
}
