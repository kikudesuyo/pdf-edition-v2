import DragHandleIcon from "@/assets/icons/dragHandleIcon";
import FileIcon from "@/assets/icons/fileIcon";
import { getFileTypeFromName } from "@/lib/fileTypeDetector";

type FileItemProps = {
  file: File;
};

const FileItem = ({ file }: FileItemProps) => {
  const fileType = getFileTypeFromName(file.name);

  return (
    <div className="flex items-center gap-3 rounded border border-gray-200 bg-white p-4 shadow-sm">
      <DragHandleIcon size="xs" color="gray" />
      <div className="min-w-0 flex-1">
        <span className="block truncate text-sm text-gray-700">
          {file.name}
        </span>
        <span className="text-xs text-gray-400">
          {(file.size / 1024).toFixed(1)} KB
        </span>
      </div>
      <FileIcon size="xs" fileType={fileType} />
    </div>
  );
};

export default FileItem;
