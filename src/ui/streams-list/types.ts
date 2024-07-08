import { Match } from "@/services/types/match.types";
import { TwitchUserResponse } from "@/services/types/twitch.types";

export interface StreamsListProps {
  match: Match;
  streams: (TwitchUserResponse | null)[];
}
