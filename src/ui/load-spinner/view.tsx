import Image from "next/image";
import loadSpinner from "@/assets/images/load-spinner.svg";

export function LoadSpinnerView() {
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center z-30 backdrop-blur-sm animate-fade bg-zinc-900 bg-opacity-50">
      <Image
        width={120}
        height={120}
        src={loadSpinner}
        alt="load spinner"
        className="animate-top-to-center"
      />
    </div>
  );
}
