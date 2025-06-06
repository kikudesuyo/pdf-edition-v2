"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragHandleIcon from "@/assets/icons/dragHandleIcon";
import FileIcon from "@/assets/icons/fileIcon";
import { getFileTypeFromName } from "@/lib/fileTypeDetector";

const SortableFileItem = ({
  file,
  id,
  index,
}: {
  file: File;
  id: string;
  index: number;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const fileType = getFileTypeFromName(file.name);

  return (
    <li
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className={`group mb-2 cursor-grab rounded border bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md active:cursor-grabbing ${isDragging ? "z-10 opacity-50 shadow-lg" : ""} `}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
          {index + 1}
        </div>
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
    </li>
  );
};

export default SortableFileItem;
