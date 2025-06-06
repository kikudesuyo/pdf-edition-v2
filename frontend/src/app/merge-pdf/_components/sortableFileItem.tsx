"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import FileItem from "@/components/ui/fileItem";

type FileItemProps = {
  file: File;
  id: string;
};

const SortableFileItem = ({ file, id }: FileItemProps) => {
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

  return (
    <li
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className={`cursor-grabtransition-all group mb-2 duration-200 hover:shadow-md active:cursor-grabbing ${isDragging ? "z-10 opacity-50 shadow-lg" : ""} `}
    >
      <FileItem file={file} />
    </li>
  );
};

export default SortableFileItem;
