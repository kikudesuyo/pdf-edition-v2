"use strict";

import DragHandleIcon from "@/assets/icons/dragHandleIcon";
import FileIcon from "@/assets/icons/fileIcon";
import TrashIcon from "@/assets/icons/TrashIcon";
import { getFileTypeFromName } from "@/lib/fileTypeDetector";

type FileItemProps = {
  file: File;
  onDelete: () => void;
  showDeleteButton?: boolean;
};

const FileItem = ({
  file,
  onDelete,
  showDeleteButton = true,
}: FileItemProps) => {
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
      {showDeleteButton && onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-2 rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
          aria-label="ファイルを削除"
        >
          <TrashIcon size="xs" color="black" />
        </button>
      )}
    </div>
  );
};

export default FileItem;
