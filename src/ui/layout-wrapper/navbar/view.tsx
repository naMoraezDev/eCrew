export function NavbarView() {
  return (
    <nav className="w-full bg-gradient-to-r from-zinc-950 to-zinc-900 border-t border-b border-zinc-800 overflow-hidden">
      <div className="w-full max-w-[1270px] mx-auto px-4 py-2 flex items-center gap-6 font-bold text-xs">
        <span className="text-violet-500 border border-violet-500 bg-opacity-10 bg-violet-900 rounded-xl px-4 py-1">
          notícias
        </span>
        <span className="text-violet-500 border border-violet-500 bg-opacity-10 bg-violet-900 rounded-xl px-4 py-1">
          times
        </span>
        <span className="text-violet-500 border border-violet-500 bg-opacity-10 bg-violet-900 rounded-xl px-4 py-1">
          torneios
        </span>
      </div>
    </nav>
  );
}
