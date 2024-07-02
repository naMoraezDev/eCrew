import { sha256 } from "js-sha256";
import { LoggedInUserProps } from "./types";

import dynamic from "next/dynamic";
const DynamicWelcomeUser = dynamic(() =>
  import("./welcome-user").then((module) => module.WelcomeUser)
);

export function LoggedInUserView({
  email,
  photoURL,
  isDesktop,
  displayName,
}: LoggedInUserProps) {
  return (
    <>
      <img
        width={28}
        height={28}
        alt="user photo"
        className="rounded-full"
        src={
          photoURL ??
          `https://www.gravatar.com/avatar/${sha256(
            email ?? ""
          )}?d=https://avatars.githubusercontent.com/u/1753933?v=4`
        }
      />
      {isDesktop && <DynamicWelcomeUser displayName={displayName} />}
    </>
  );
}
