import HomeIcon from "@/assets/icons/HomeIcon";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 border-b-2 p-3 shadow-lg items-center">
      <div className="flex flex-row gap-16">
        <div className="flex flex-row items-center gap-2 text-slate-600">
          <HomeIcon size="size-8" />
          <p className="font-bold text-2xl">Home</p>
        </div>
        <p className="font-semibold text-xl text-slate-600 p-2">PDF 結合</p>
        <p className="font-semibold text-xl text-slate-600 p-2">PDF 分割</p>
      </div>
    </header>
  );
};

export default Header;
