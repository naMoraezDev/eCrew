import { SignOutButtonProps } from "./types";
import { FaSignOutAlt } from "react-icons/fa";

export function SignOutButtonView({ signOut }: SignOutButtonProps) {
  return (
    <button
      type="button"
      onClick={signOut}
      className="flex justify-center items-center bg-zinc-800 bg-opacity-50 rounded-lg p-3"
    >
      <FaSignOutAlt size={16} />
    </button>
  );
}
