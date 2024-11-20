export const sizeStyle = {
  sm: "w-8 h-8",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-36 h-36",
  "2xl": "w-48 h-48",
  "3xl": "w-64 h-64",
};

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
  size: keyof typeof sizeStyle;
  color?: keyof typeof colorStyle;
  className?: string;
};
