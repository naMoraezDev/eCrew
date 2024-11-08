import { Match } from "@/services/pandascore/types/matches.types";
import { TwitchUserResponse } from "@/services/twitch/types/user.types";

export interface StreamsListProps {
  match: Match;
  streams: (TwitchUserResponse | null)[];
}
