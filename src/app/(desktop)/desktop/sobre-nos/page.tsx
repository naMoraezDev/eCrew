import { Metadata } from "next";
import { AboutUs } from "@/features/about-us";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Sobre Nós | GG",
  description:
    "Conheça as principais vantagens do eCrew. Saiba como podemos tornar sua jornada de notícias mais eficiente. Acesse nosso site e conheça mais sobre a tripulação. ",
};

export default function AboutUsPage() {
  return <AboutUs isDesktop />;
}
