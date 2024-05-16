import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import ePostsLogo from "@/assets/images/e_posts_logo.svg";
import gamepadIcon from "@/assets/images/gamepad_icon.png";

export function HeaderView() {
  return (
    <header className="w-full h-16 flex items-center justify-between max-w-[1270px] mx-auto px-4">
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
        <div className="w-px h-6 bg-slate-50" />
        <Image
          priority
          width={24}
          height={24}
          src={gamepadIcon}
          alt="gamepad icon"
        />
      </section>
      <FaUserCircle size={32} />
    </header>
  );
}