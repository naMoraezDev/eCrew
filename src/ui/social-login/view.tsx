import { useSocialLogin } from "./_io";
import { FcGoogle } from "react-icons/fc";
import { SocialLoginProps } from "./types";

export function SocialLoginView({ setIsLoading }: SocialLoginProps) {
  const { loginWithGoogle, submitError } = useSocialLogin({ setIsLoading });

  return (
    <div className="w-full flex flex-col gap-3">
      {submitError && (
        <span className="text-red-500 text-sm text-center font-kanit font-medium">
          {submitError}
        </span>
      )}
      <button
        type="button"
        onClick={loginWithGoogle}
        className="flex items-center justify-center gap-2 text-sm rounded-lg bg-zinc-800 p-2"
      >
        <FcGoogle />
        Entre com o Google
      </button>
    </div>
  );
}
