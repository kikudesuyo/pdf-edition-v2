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
    >
      <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.018.270.018.684 0 1.131-.342 1.131-.995 0-.532-.342-.237-1.029-.237zm8.657-9.68h-15.924v20h20v-14.237l-4.076-5.763zm-3.657 1.542l2.829 3.458h-2.829v-3.458zm-4.267 10.138c0 1.026-.553 1.342-1.618 1.342-.296 0-.526-.018-.742-.036v-3.28c.234-.018.5-.036.76-.036 1.156 0 1.6.354 1.6 1.296v.714zm3 2c-.553 0-1.07-.18-1.447-.395l.264-.632c.306.162.666.288 1.08.288.449 0 .735-.216.735-.540 0-.324-.234-.486-.81-.702-.774-.288-1.26-.648-1.26-1.314 0-.702.576-1.278 1.53-1.278.54 0 .936.144 1.224.324l-.252.648c-.216-.126-.504-.252-.936-.252-.414 0-.648.216-.648.486 0 .324.252.468.882.72.828.324 1.188.738 1.188 1.332 0 .702-.504 1.315-1.55 1.315z" />
    </svg>
  );
};

export default FileIcon;
