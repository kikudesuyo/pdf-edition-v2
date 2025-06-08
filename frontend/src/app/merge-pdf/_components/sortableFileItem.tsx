"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragHandleIcon from "@/assets/icons/dragHandleIcon";
import FileIcon from "@/assets/icons/fileIcon";
import { getFileTypeFromName } from "@/lib/fileTypeDetector";
import TrashIcon from "@/assets/icons/TrashIcon";

type FileItemProps = {
  file: File;
  id: string;
  onDelete: () => void;
};

const SortableFileItem = ({ file, id, onDelete }: FileItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const fileType = getFileTypeFromName(file.name);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`group mb-2 duration-200 hover:shadow-md ${isDragging ? "z-10 opacity-50 shadow-lg" : ""} `}
    >
      <div className="flex items-center gap-3 rounded border border-gray-200 bg-white p-4 shadow-sm">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab transition-all active:cursor-grabbing"
        >
          <DragHandleIcon size="xs" color="gray" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm text-gray-700">
            {file.name}
          </span>
          <span className="text-xs text-gray-400">
            {(file.size / 1024).toFixed(1)} KB
          </span>
        </div>
        <FileIcon size="xs" fileType={fileType} />
        <TrashIcon
          size="xs"
          color="gray"
          className="cursor-pointer p-4 hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        />
      </div>
    </li>
  );
};

export default SortableFileItem;
