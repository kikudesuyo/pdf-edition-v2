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
import type { FileItem } from "@/app/merge-pdf/types";

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

  const handleDeleteFile = (uid: string) => {
    const newFiles = fileItems.filter((fileItem) => fileItem.uid !== uid);
    setFiles(newFiles);
  };

  return (
    <div className="w-full">
      {fileItems.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-slate-300/50 bg-slate-700/30 p-8 text-center">
          <div className="text-slate-300">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-lg">ファイルが選択されていません</p>
            <p className="mt-2 text-sm text-slate-400">
              ファイルをアップロードしてください
            </p>
          </div>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fileItems.map((fileItem) => fileItem.uid)}
            strategy={verticalListSortingStrategy}
          >
            <div className="rounded-lg border border-slate-300/20 bg-slate-800/30 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-200">
                  ドラッグして順序を変更
                </span>
                <span className="text-xs text-slate-400">
                  {fileItems.length}個のファイル
                </span>
              </div>

              <ul className="custom-scrollbar max-h-200 list-none space-y-0 overflow-y-auto">
                {fileItems.map((fileItem) => (
                  <div key={fileItem.uid}>
                    <SortableFileItem
                      file={fileItem.file}
                      id={fileItem.uid}
                      onDelete={() => handleDeleteFile(fileItem.uid)}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </SortableContext>
        </DndContext>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(71, 85, 105, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.7);
        }
      `}</style>
    </div>
  );
};

export default SortableFileItemList;
