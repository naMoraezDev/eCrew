import Link from "next/link";
import Image from "next/image";
import { MdUpcoming } from "react-icons/md";
import ecrewLogo from "@/assets/images/e_posts_logo.svg";
import { PandascoreService } from "@/services/pandascore/pandascore.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function UpcomingMatchesView() {
  const upcomingMatches = await new PandascoreService(
    httpClientFactory()
  ).getMatchesList({ type: "upcoming", page: 1, size: 5 });

  if (!upcomingMatches?.length) {
    return null;
  }

  return (
    <section className="flex flex-col rounded-lg bg-zinc-900 bg-opacity-50">
      <h4 className="font-kanit font-medium text-sm flex items-center gap-2 px-6 py-3">
        <MdUpcoming />
        Próximas partidas
      </h4>
      <ul className="flex flex-col">
        {upcomingMatches?.map((match, index) => {
          return (
            <li key={index} className="px-6 py-3 flex gap-4 relative group">
              <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                <Image
                  width={16}
                  height={16}
                  alt="opponent 1"
                  src={match.opponents[0]?.opponent?.image_url || ecrewLogo}
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
                  alt="opponent 1"
                  src={match.opponents[1]?.opponent?.image_url || ecrewLogo}
                />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="font-kanit text-sm font-bold text-nowrap hover:animate-text-slide group-hover:text-violet-500 duration-300">
                  {match.name}
                </span>
                <span className="text-xs font-kanit">
                  {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </div>
              <Link
                href={`/partidas/${match.id}`}
                className="size-full absolute top-0 left-0"
              />
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
