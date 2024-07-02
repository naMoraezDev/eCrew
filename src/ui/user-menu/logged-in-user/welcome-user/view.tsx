import { WelcomeUserProps } from "./types";

export function WelcomeUserView({ displayName }: WelcomeUserProps) {
  return (
    <div className="flex flex-col text-xs font-kanit">
      <span>Bem vindo, {displayName.split(" ")[0]}</span>
      <span>minha conta</span>
    </div>
  );
}
