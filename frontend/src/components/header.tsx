import HomeIcon from "@/assets/icons/HomeIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 flex-row items-center border-b-2 p-3 shadow-lg">
      <div className="flex flex-row gap-16">
        <Link
          href="/home"
          className="flex flex-row items-center gap-2 text-slate-600"
        >
          <HomeIcon size="size-8" />
          <p className="text-2xl font-bold">Home</p>
        </Link>
        <p className="p-2 text-xl font-semibold text-slate-600">PDF 結合</p>
        <p className="p-2 text-xl font-semibold text-slate-600">PDF 分割</p>
      </div>
    </header>
  );
};

export default Header;
