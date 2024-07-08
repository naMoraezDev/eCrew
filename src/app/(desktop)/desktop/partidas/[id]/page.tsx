import { Match } from "@/features/match";

export default function MatchPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return <Match id={id} isDesktop />;
}
