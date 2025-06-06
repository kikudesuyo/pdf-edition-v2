"use client";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableFileItem from "@/app/merge-pdf/_components/sortableFileItem";

type Props = {
  files: File[];
  setFiles: (files: File[]) => void;
};

const SortableFileItemList = ({ files, setFiles }: Props) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = files.findIndex((file) => file.name === active.id);
    const newIndex = files.findIndex((file) => file.name === over.id);
    const newFiles = arrayMove(files, oldIndex, newIndex);
    setFiles(newFiles);
  };

  return (
    <div>
      <p className="text-center text-2xl font-semibold text-slate-600">
        選択したPDFファイル
      </p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={files.map((file) => file.name)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="w-full max-w-md list-none rounded border p-4">
            {files.map((file) => (
              <SortableFileItem key={file.name} id={file.name} file={file} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SortableFileItemList;
