import Link from "next/link";
import Image from "next/image";
import { MdUpcoming } from "react-icons/md";
import { FaShieldCat } from "react-icons/fa6";
import { EcrewApiService } from "@/services/ecrew-api.service";
import { httpClientFactory } from "@/infrastructure/adapters/factories/http-client.factory";

export async function UpcomingMatchesView() {
  const upcomingMatches = await new EcrewApiService(
    httpClientFactory()
  ).getUpcommingMatches(
    "?filter_type=videogame&filter=cod-mw,cs-go,dota-2,league-of-legends,r6-siege,valorant&page=1&per_page=5"
  );

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
        {upcomingMatches?.slice(0, 5)?.map((match, index) => {
          return (
            <li key={index} className="px-6 py-3 flex gap-4">
              <div className="h-full flex justify-center items-center gap-2 z-10 shrink-0">
                {match.opponents[0]?.opponent.image_url ? (
                  <Image
                    width={16}
                    height={16}
                    alt="opponent 1"
                    src={match.opponents[0].opponent.image_url || ""}
                  />
                ) : (
                  <FaShieldCat size={16} className="text-zink-600 shrink-0" />
                )}
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
                {match.opponents[1]?.opponent.image_url ? (
                  <Image
                    width={16}
                    height={16}
                    alt="opponent 1"
                    src={match.opponents[1].opponent.image_url || ""}
                  />
                ) : (
                  <FaShieldCat size={16} className="text-zink-600 shrink-0" />
                )}
              </div>
              <div className="flex flex-col gap-2 overflow-hidden">
                <span className="font-kanit text-sm font-bold text-nowrap hover:animate-text-slide">
                  {match.name}
                </span>
                <span className="text-xs font-kanit">
                  {new Date(match.begin_at).toLocaleDateString("pt-BR", {
                    hour: "numeric",
                    minute: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
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
