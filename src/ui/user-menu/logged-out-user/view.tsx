import { FaUser } from "react-icons/fa";
import { LoggedOutUserProps } from "./types";

import dynamic from "next/dynamic";
const DynamicLogInOrRegister = dynamic(() =>
  import("./log-in-or-register").then((module) => module.LogInOrRegister)
);

export function LoggedOutUserView({ isDesktop }: LoggedOutUserProps) {
  return (
    <>
      <FaUser className="shrink-0" size={20} />
      {isDesktop && <DynamicLogInOrRegister />}
    </>
  );
}
