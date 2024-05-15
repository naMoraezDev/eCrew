export function NavbarView() {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-violet-950 border-t border-b border-gray-800 overflow-hidden">
      <div className="w-full max-w-[1270px] mx-auto px-4 py-2 flex items-center gap-6 font-bold text-xs">
        <span className="text-violet-500 border border-violet-800 bg-opacity-20 bg-violet-900 rounded-xl px-4 py-1">
          notícias
        </span>
        <span className="text-violet-500 border border-violet-800 bg-opacity-20 bg-violet-900 rounded-xl px-4 py-1">
          times
        </span>
        <span className="text-violet-500 border border-violet-800 bg-opacity-20 bg-violet-900 rounded-xl px-4 py-1">
          torneios
        </span>
      </div>
    </nav>
  );
}
