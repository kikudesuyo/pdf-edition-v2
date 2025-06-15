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
      className={`group mb-3 transition-all duration-75 ${
        isDragging
          ? "z-10 rotate-2 scale-105 shadow-2xl shadow-blue-500/25"
          : "hover:scale-102 hover:shadow-lg"
      }`}
    >
      <div
        className={`flex items-center gap-4 rounded-lg p-3 transition-all duration-200 ${
          isDragging
            ? "border-2 border-blue-400/50 bg-white/20 backdrop-blur-sm"
            : "border border-slate-300/30 bg-white/10 backdrop-blur-sm hover:border-slate-200/50 hover:bg-white/15"
        }`}
      >
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab rounded p-1 transition-all hover:scale-110 hover:bg-white/10 active:scale-95 active:cursor-grabbing"
        >
          <DragHandleIcon size="xs" color="white" />
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <FileIcon size="sm" fileType={fileType} />
          <div className="min-w-0 flex-1">
            <span className="block truncate text-sm font-medium text-white">
              {file.name}
            </span>
            <span className="text-xs text-slate-300">
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>
        </div>

        <button
          className="group/btn rounded-lg p-2 transition-all hover:scale-110 hover:bg-red-500/20 active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <TrashIcon
            size="xs"
            color="white"
            className="transition-colors group-hover/btn:text-red-400"
          />
        </button>
      </div>
    </li>
  );
};

export default SortableFileItem;
