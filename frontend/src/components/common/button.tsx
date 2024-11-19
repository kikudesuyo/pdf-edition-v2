type ButtonProps = {
  color: Color;
  size: Size;
  text: string;
};

const buttonStyle = {
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
};
const sizeStyle = {
  small: "text-sm p-2 rounded-md",
  medium: "text-base p-4 rounded-md",
  large: "text-xl px-10 py-4 rounded-lg",
};

type Color = keyof typeof buttonStyle;
type Size = keyof typeof sizeStyle;

const Button = ({ color, size, text }: ButtonProps) => {
  return (
    <button
      className={`${buttonStyle[color]} ${sizeStyle[size]} font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
