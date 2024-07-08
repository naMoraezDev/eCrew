import Link from "next/link";

export function NavbarView() {
  return (
    <nav className="w-full bg-gradient-to-r from-zinc-950 to-zinc-900 overflow-hidden">
      <div className="w-full max-w-[1270px] mx-auto px-4 py-2 flex items-center justify-between gap-16 font-bold text-xs">
        <span />
        <div className="flex items-center gap-16">
          <Link
            href="/sobre-nos"
            className="text-violet-500 px-3 p-1 bg-violet-500 bg-opacity-10 rounded-full"
          >
            sobre nós
          </Link>
          <Link
            href="/termos-de-uso"
            className="text-violet-500 px-3 p-1 bg-violet-500 bg-opacity-10 rounded-full"
          >
            termos de uso
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="text-violet-500 px-3 p-1 bg-violet-500 bg-opacity-10 rounded-full"
          >
            política de privacidade
          </Link>
          <Link
            href="/fale-conosco"
            className="text-violet-500 px-3 p-1 bg-violet-500 bg-opacity-10 rounded-full"
          >
            fale conosco
          </Link>
        </div>
      </div>
    </nav>
  );
}
