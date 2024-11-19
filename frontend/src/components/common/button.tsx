type ButtonProps = {
  color: Color;
  size: Size;
  text: string;
};

const buttonStyle = {
  red: "bg-red-500 text-white rounded-md",
  blue: "bg-blue-500 text-white rounded-md",
  green: "bg-green-500 text-white rounded-md",
};
const sizeStyle = {
  small: "text-sm p-2",
  medium: "text-base p-4",
  large: "text-lg p-6",
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
