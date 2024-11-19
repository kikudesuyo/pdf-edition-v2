export const colorStyle = {
  white: "text-white",
  black: "text-black",
  red: "text-red-500",
  green: "text-green-500",
  blue: "text-blue-500",
  yellow: "text-yellow-500",
  gray: "text-gray-500",
  ash: "text-gray-300",
};

export type IconProps = {
  size: string;
  color?: keyof typeof colorStyle;
  className?: string;
};
