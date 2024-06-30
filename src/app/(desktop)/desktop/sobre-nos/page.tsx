import { Metadata } from "next";
import { AboutUs } from "@/features/about-us";

export const metadata: Metadata = {
  title: "Sobre Nós | ePosts",
  description:
    "Conheça as principais vantagens do ePosts. Saiba como podemos tornar sua jornada de notícias mais eficiente. Acesse nosso site e conheça mais sobre a tripulação. ",
};

export default function AboutUsPage() {
  return <AboutUs isDesktop />;
}
