import HomeIcon from "@/assets/icons/homeIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-slate-600/50 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-xl backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* ロゴ・ブランド */}
          <Link
            href="/home"
            className="group flex items-center gap-3 text-white transition-all hover:scale-105"
          >
            <div className="rounded-lg bg-blue-600/20 p-2 backdrop-blur-sm transition-all group-hover:bg-blue-500/30">
              <HomeIcon size="sm" color="blue" />
            </div>
            <h1 className="text-xl font-bold">PDF Tools</h1>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/split-pdf"
              className="group relative rounded-lg px-4 py-2 text-slate-200 transition-all hover:bg-white/10 hover:text-white"
            >
              <span className="relative z-10 font-medium">PDF 分割</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>

            <Link
              href="/merge-pdf"
              className="group relative rounded-lg px-4 py-2 text-slate-200 transition-all hover:bg-white/10 hover:text-white"
            >
              <span className="relative z-10 font-medium">PDF 結合</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
