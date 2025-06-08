import { IconProps, colorStyle, sizeStyle } from "@/assets/icons/type";

const DragHandleIcon = ({ size, color = "gray" }: IconProps) => {
  return (
    <svg
      className={`${sizeStyle[size]} ${colorStyle[color]} font-semibold`}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <circle cx="4" cy="4" r="1" />
      <circle cx="4" cy="8" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="8" cy="4" r="1" />
      <circle cx="8" cy="8" r="1" />
      <circle cx="8" cy="12" r="1" />
    </svg>
  );
};

export default DragHandleIcon;
