"use client";

import { useShareButtons } from "./_io";
import { FaFacebook } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export function ShareButtonsVIew() {
  const { fbShareUrl, nativeShare, ttShareUrl, wppShareUrl } =
    useShareButtons();

  return (
    <section className="flex items-center gap-4">
      <a href={ttShareUrl} target="_blank" rel="noreferrer">
        <FaXTwitter size={20} />
      </a>
      <a href={wppShareUrl} target="_blank" rel="noreferrer">
        <IoLogoWhatsapp size={20} />
      </a>
      <a href={fbShareUrl} target="_blank" rel="noreferrer">
        <FaFacebook size={20} />
      </a>
      <FaShareAlt onClick={nativeShare} size={20} className="cursor-pointer" />
    </section>
  );
}
