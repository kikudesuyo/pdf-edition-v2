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
import { type FileItem } from "@/app/merge-pdf/page";

type Props = {
  fileItems: FileItem[];
  setFiles: (files: FileItem[]) => void;
};

const SortableFileItemList = ({ fileItems, setFiles }: Props) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = fileItems.findIndex(
      (fileItem) => fileItem.uid === active.id
    );
    const newIndex = fileItems.findIndex(
      (fileItem) => fileItem.uid === over.id
    );
    const newFiles = arrayMove(fileItems, oldIndex, newIndex);
    setFiles(newFiles);
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={fileItems.map((fileItem) => fileItem.uid)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="min-h-60 list-none rounded border-2 bg-blue-50 p-4 text-sm transition-all">
            {fileItems.length === 0 ? (
              <li className="text-center text-gray-500">
                ファイルが選択されていません
              </li>
            ) : (
              fileItems.map((fileItem) => (
                <SortableFileItem
                  key={fileItem.uid}
                  id={fileItem.uid}
                  file={fileItem.file}
                  index={fileItems.findIndex(
                    (item) => item.uid === fileItem.uid
                  )}
                />
              ))
            )}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SortableFileItemList;
