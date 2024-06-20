import { DefaultProps } from "@/types/common";
import { Games } from "@/services/types/games.types";

export interface HeaderProps extends DefaultProps {
  games: Games;
}
