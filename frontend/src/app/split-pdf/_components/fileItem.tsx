import FileIcon from "@/assets/icons/fileIcon";
import TrashIcon from "@/assets/icons/TrashIcon";
import { getFileTypeFromName } from "@/lib/fileTypeDetector";

type FileItemProps = {
  file: File;
  onDelete: () => void;
};

const FileItem = ({ file, onDelete }: FileItemProps) => {
  const fileType = getFileTypeFromName(file.name);

  return (
    <div className="flex items-center justify-between gap-3 rounded border border-blue-300 p-6 shadow-sm">
      <div className="flex items-center justify-center gap-3">
        <FileIcon size="sm" fileType={fileType} />
        <span className="block truncate text-xl text-gray-700">
          {file.name}
        </span>
        <span className="text-xs text-gray-400">
          {(file.size / 1024).toFixed(1)} KB
        </span>
      </div>
      <TrashIcon
        size="sm"
        color="gray"
        className="cursor-pointer p-4 hover:text-red-500"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      />
    </div>
  );
};

export default FileItem;
