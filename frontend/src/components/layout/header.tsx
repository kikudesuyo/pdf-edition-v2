import HomeIcon from "@/assets/icons/homeIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 flex-row items-center border-b-2 p-3 shadow-lg">
      <div className="flex flex-row gap-16">
        <Link
          href="/home"
          className="flex flex-row items-center gap-2 text-slate-600"
        >
          <HomeIcon size="sm" color="gray" />
          <p className="text-2xl font-bold">Home</p>
        </Link>
        <Link
          href="/split-pdf"
          className="flex flex-row items-center gap-2 text-slate-600"
        >
          <p className="text-2xl font-bold">PDF 分割</p>
        </Link>
        <Link
          href="/merge-pdf"
          className="flex flex-row items-center gap-2 text-slate-600"
        >
          <p className="text-2xl font-bold">PDF 結合</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
