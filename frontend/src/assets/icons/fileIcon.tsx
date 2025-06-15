import { IconProps, colorStyle, sizeStyle } from "@/assets/icons/type";
import { type FileType } from "@/lib/fileTypeDetector";

type FileIconProps = IconProps & {
  fileType: FileType;
  size: keyof typeof sizeStyle;
};

const fileTypeColorMap: Record<FileType, keyof typeof colorStyle> = {
  pdf: "red",
  docx: "blue",
  txt: "gray",
  xlsx: "green",
  pptx: "orange",
};

const FileIcon = ({ size, fileType }: FileIconProps) => {
  const iconColor = fileTypeColorMap[fileType];

  return (
    <svg
      className={`${sizeStyle[size]} ${colorStyle[iconColor]} font-semibold`}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="white"
      strokeWidth="0.4"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="11" x2="16" y2="11" strokeLinecap="round" />
      <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
      <line x1="8" y1="15" x2="16" y2="15" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" strokeLinecap="round" />
    </svg>
  );
};

export default FileIcon;
