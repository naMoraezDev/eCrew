import { Tournament } from "@/features/tournament";

export default function TorunamentPage({ params }: { params: { id: string } }) {
  return <Tournament id={params.id} isDesktop />;
}
