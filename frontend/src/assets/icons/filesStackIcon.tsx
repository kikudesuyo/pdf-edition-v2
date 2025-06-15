import { IconProps, colorStyle, sizeStyle } from "@/assets/icons/type";

const FilesStackIcon = ({ size, color = "black" }: IconProps) => {
  return (
    <svg
      className={`${sizeStyle[size]} ${colorStyle[color]}`}
      viewBox="0 0 19 19"
      fill="currentColor"
      stroke="white"
      strokeWidth="0.5"
    >
      <path
        opacity="0.3"
        d="M12 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z"
        transform="translate(-4, -4)"
      />
      <path
        opacity="0.6"
        d="M12 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z"
        transform="translate(-2, -2)"
      />
      <path d="M12 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
      <path d="M12 2v5h5" />
      <line x1="6" y1="11" x2="14" y2="11" strokeLinecap="round" />
      <line x1="6" y1="13" x2="14" y2="13" strokeLinecap="round" />
      <line x1="6" y1="15" x2="12" y2="15" strokeLinecap="round" />
    </svg>
  );
};

export default FilesStackIcon;
