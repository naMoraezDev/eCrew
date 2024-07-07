"use client";

import { CustomInput } from "./types";
import { useCustomInput } from "./_io";
import { PiEye, PiEyeClosed } from "react-icons/pi";

export function CustomInputView({
  name,
  type,
  error,
  register,
  placeholder,
  autocomplete,
}: CustomInput) {
  const { showPassword, toggleShowPassword } = useCustomInput();

  return (
    <div className="relative flex flex-col gap-2">
      <input
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autocomplete}
        type={showPassword ? "text" : type}
        className={`
          ${
            error
              ? "placeholder-red-500 text-red-500 focus:!border-red-500"
              : "border-gray-300"
          }
          w-full h-10 px-2 border-[1px] !border-zinc-800 !transition-all !duration-300 bg-transparent rounded-lg text-sm
          focus:!border-violet-500 focus:!border-[1px]
          outline-none
          placeholder:text-sm
        `}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className="
            absolute size-8 right-3 top-1 flex items-center rounded-full duration-300 p-[2px] bg-zinc-900
            hover:bg-zinc-900
          "
        >
          {showPassword ? (
            <PiEye
              className={`
                ${error && "text-red-500"} 
                size-8 p-1
              `}
            />
          ) : (
            <PiEyeClosed
              className={`
                ${error && "text-red-500"} 
                size-8 p-1
              `}
            />
          )}
        </button>
      )}
    </div>
  );
}
