import { AboutUsProps } from "./types";
import { RiTeamFill } from "react-icons/ri";

export function AboutUsView({ isDesktop }: AboutUsProps) {
  return (
    <section className="flex flex-col gap-3 mb-10">
      <div
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h1 className="font-kanit font-medium text-3xl bg-violet-500 bg-opacity-10 border border-violet-500 rounded-lg px-4 py-2 w-fit flex items-center gap-2">
          <RiTeamFill className="shrink-0" />
          Sobre Nós
        </h1>
        <p>
          Bem-vindo ao ePosts! Somos apaixonados por jogos eletrônicos e estamos
          comprometidos em trazer as últimas novidades, análises e coberturas
          dos principais eventos do mundo dos e-sports.
        </p>
      </div>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Nossa Missão</h2>
        <p>
          Nossa missão é informar e entreter os fãs de e-sports, oferecendo
          conteúdo relevante, imparcial e de alta qualidade. Acreditamos que os
          jogos competitivos têm o poder de unir comunidades e inspirar pessoas,
          e queremos compartilhar essa paixão com você.
        </p>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">O Que Oferecemos</h2>
        <ul className="list-disc list-inside">
          <li>
            Notícias Atualizadas: Mantemos você informado sobre os
            acontecimentos mais recentes nos cenários de League of Legends,
            CS:GO, Dota 2, Valorant e outros jogos populares.
          </li>
          <li>
            Análises Profundas: Nossos especialistas analisam partidas,
            estratégias, mudanças de metagame e tudo o que envolve o mundo
            competitivo dos e-sports.
          </li>
          <li>
            Entrevistas Exclusivas: Conversamos com jogadores, técnicos,
            streamers e personalidades do meio para trazer insights exclusivos e
            histórias inspiradoras.
          </li>
        </ul>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Nossa Equipe</h2>
        <p>
          Nosso time é formado por gamers, jornalistas e entusiastas dos
          e-sports. Estamos sempre em busca de aprimorar nosso conteúdo e
          oferecer a melhor experiência possível para nossos leitores.
        </p>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Entre em Contato</h2>
        <p>
          Se tiver alguma sugestão, dúvida ou apenas quiser bater um papo sobre
          e-sports, não hesite em nos contatar! Estamos aqui para você.
        </p>
      </section>
    </section>
  );
}
