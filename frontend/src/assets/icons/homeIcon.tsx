import { IconProps, colorStyle, sizeStyle } from "@/assets/icons/type";

const HomeIcon = ({ size, color = "black" }: IconProps) => {
  return (
    <svg
      className={`${sizeStyle[size]} ${colorStyle[color]} font-semibold`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

export default HomeIcon;
