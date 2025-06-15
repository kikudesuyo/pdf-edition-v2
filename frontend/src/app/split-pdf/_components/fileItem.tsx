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
    <div className="group flex items-center justify-between gap-4 rounded-lg border border-slate-300/30 bg-white/10 p-6 backdrop-blur-sm transition-all duration-200 hover:border-slate-200/50 hover:bg-white/15 hover:shadow-lg">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="flex-shrink-0">
          <FileIcon size="md" fileType={fileType} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="mb-1 block truncate text-lg font-medium text-white">
            {file.name}
          </span>
          <span className="text-sm text-slate-300">
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </span>
        </div>
      </div>

      <button
        className="group/btn flex-shrink-0 rounded-lg p-3 opacity-70 transition-all hover:scale-110 hover:bg-red-500/20 active:scale-95 group-hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        title="ファイルを削除"
      >
        <TrashIcon
          size="sm"
          color="white"
          className="transition-colors group-hover/btn:text-red-400"
        />
      </button>
    </div>
  );
};

export default FileItem;
