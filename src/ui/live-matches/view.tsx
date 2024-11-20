import Link from "next/link";
import Image from "next/image";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { RiErrorWarningFill, RiLiveFill } from "react-icons/ri";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function LiveMatchesView() {
  const data = await new PandascoreService(httpClientFactory()).getMatchesList({
    page: 1,
    size: 5,
    type: "running",
  });

  return (
    <section className="flex flex-col rounded-lg bg-zinc-900 bg-opacity-50">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 px-6 py-3">
        <RiLiveFill />
        Partidas em andamento
      </h4>
      <ul className="flex flex-col">
        {Boolean(!data?.length) && (
          <span className="px-6 py-3 font-kanit text-sm flex items-center gap-2">
            <RiErrorWarningFill />
            Nenhuma partida em andamento.
          </span>
        )}
        {data?.map((match, index) => {
          return (
            <li
              key={index}
              title={match.name}
              className="pl-10 pr-6 py-3 flex items-center gap-4 h-14 relative group overflow-hidden"
            >
              <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                <Image
                  width={16}
                  height={16}
                  alt="opponent 1"
                  src={match.opponents[0].opponent.image_url || ecrewLogo}
                />

                {match.status === "running" && (
                  <span className="text-xs font-kanit font-bold">
                    {match.results[0].score}
                  </span>
                )}
                <span className="text-xs font-bold">vs</span>
                {match.status === "running" && (
                  <span className="text-xs font-kanit font-bold">
                    {match.results[1].score}
                  </span>
                )}
                <Image
                  width={16}
                  height={16}
                  alt="opponent 2"
                  src={match.opponents[1].opponent.image_url || ecrewLogo}
                />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="font-kanit text-xs font-bold text-nowrap hover:animate-text-slide group-hover:text-violet-500 duration-300">
                  {match.name}
                </span>
              </div>
              <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-red-500 via-transparent to-transparent opacity-5 z-10" />
              <div className="absolute top-0 left-0 h-full z-10 rotate-180">
                <span className="flex h-full justify-center items-center text-xs text-red-500 font-kanit font-bold rotate-90">
                  LIVE
                </span>
              </div>
              <Link
                href={`/partidas/${match.id}`}
                className="size-full absolute top-0 left-0 z-10"
              />
              {match?.opponents[0]?.opponent?.location && (
                <div className="absolute -left-[50px] -z-10 overflow-hidden group-hover:-left-[80px] duration-300">
                  <div className="relative">
                    <Image
                      width={320}
                      height={320}
                      className="object-cover size-40"
                      alt={match?.opponents[0]?.opponent?.location ?? ""}
                      src={`https://flagcdn.com/w320/${match?.opponents[0]?.opponent?.location?.toLowerCase()}.jpg`}
                    />
                    <div className="absolute top-0 left-0 size-full bg-gradient-to-l from-zinc-950 to-transparent" />
                  </div>
                </div>
              )}
              {match?.opponents[1]?.opponent?.location && (
                <div className="absolute -right-[50px] -z-10 overflow-hidden group-hover:-right-[80px] duration-300">
                  <div className="relative">
                    <Image
                      width={320}
                      height={320}
                      className="object-cover size-40"
                      alt={match?.opponents[1]?.opponent?.location ?? ""}
                      src={`https://flagcdn.com/w320/${match?.opponents[1]?.opponent?.location?.toLowerCase()}.jpg`}
                    />
                    <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-zinc-950 to-transparent" />
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <Link href="/partidas" className="text-sm font-kanit p-3 self-center">
        ver todas
      </Link>
    </section>
  );
}
