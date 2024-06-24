import { FcGoogle } from "react-icons/fc";
import { FaTwitch } from "react-icons/fa";

export function SocialLoginView() {
  return (
    <div className="w-full flex flex-col gap-3">
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-sm rounded-lg bg-zinc-800 p-2"
      >
        <FcGoogle />
        Entre com o Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-sm rounded-lg bg-zinc-800 p-2"
      >
        <FaTwitch className="text-violet-500" />
        Entre com a Twitch
      </button>
    </div>
  );
}
