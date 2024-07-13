import { Match } from "@/services/pandascore/types/matches.types";
import { TwitchUserResponse } from "@/services/types/twitch.types";

export interface StreamsListProps {
  match: Match;
  streams: (TwitchUserResponse | null)[];
}
