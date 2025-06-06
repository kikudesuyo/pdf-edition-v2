import { IconProps, colorStyle, sizeStyle } from "@/assets/icons/type";

const CrossIcon = ({ size, color = "black" }: IconProps) => {
  return (
    <svg
      className={`${sizeStyle[size]} ${colorStyle[color]} font-semibold`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
export default CrossIcon;
