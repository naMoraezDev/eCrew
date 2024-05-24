import Image from "next/image";
import { GameSelect } from "@/ui/game-select";
import { FaUserCircle } from "react-icons/fa";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";

export function HeaderView() {
  return (
    <header className="sticky top-0 z-20 bg-zinc-950">
      <div className="w-full h-16 flex items-center justify-between max-w-[1270px] mx-auto px-4 ">
        <section className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              priority
              width={24}
              height={24}
              src={ePostsLogo}
              alt="ePosts logo"
            />
            <span className="font-kanit text-xl">ePosts</span>
          </div>
          <div className="w-px h-6 bg-gray-50" />
          <GameSelect />
        </section>
        <FaUserCircle size={32} />
      </div>
    </header>
  );
}
