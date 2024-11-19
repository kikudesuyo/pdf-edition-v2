import { IconProps, colorStyle } from "@/assets/icons/type";

const UploadIcon = ({ size, color = "black" }: IconProps) => {
  return (
    <svg
      className={`${size} ${colorStyle[color]} font-semibold`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4a6.5 6.5 0 00-6.5 6.5c-2.53 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5h13c2.21 0 4-1.79 4-4 0-2.04-1.53-3.72-3.65-3.96zM13 13v5h-2v-5H8l4-4 4 4h-3z" />
    </svg>
  );
};

export default UploadIcon;
