const colorStyle = {
  red: "bg-rose-600 text-white hover:bg-rose-700 border border-red-500/30",
  blue: "bg-blue-600 text-white hover:bg-blue-700 border border-blue-500/30",
  green:
    "bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500/30",
  // テーマに合うダークカラー
  slate: "bg-slate-600 text-white hover:bg-slate-700 border border-slate-500",
  dark: "bg-slate-800 text-white hover:bg-slate-900 border border-slate-600",
  // ガラス効果スタイル
  glass:
    "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20",
  glassBlue:
    "bg-blue-500/20 text-white border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30",
  // アクセントカラー
  accent:
    "bg-gradient-to-r from-blue-500 to-slate-600 text-white hover:from-blue-600 hover:to-slate-700",
  // 透明スタイル
  outline:
    "bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:border-white/80",
};

const sizeStyle = {
  small: "text-sm p-2 rounded-md",
  medium: "text-base p-4 rounded-md",
  large: "text-xl px-10 py-4 rounded-lg",
};

type Color = keyof typeof colorStyle;
type Size = keyof typeof sizeStyle;

type ButtonProps = {
  color: Color;
  size: Size;
  text: string;
  onClick?: () => void;
};

const Button = ({ color, size, text, onClick }: ButtonProps) => {
  return (
    <button
      className={`${colorStyle[color]} ${sizeStyle[size]} transform font-semibold shadow-lg transition-all duration-200 hover:scale-105 active:scale-95`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
