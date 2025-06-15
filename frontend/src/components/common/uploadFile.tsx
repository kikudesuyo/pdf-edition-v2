import { useDropzone } from "react-dropzone";
import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";

type Props = {
  onUpload: (files: File[]) => void;
};

const UploadFile = ({ onUpload }: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [] },
    onDrop: (acceptedFiles) => {
      onUpload(acceptedFiles);
    },
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        {...getRootProps({
          className: `flex w-full flex-col items-center justify-center gap-6 p-8 border-2 border-dashed rounded-xl text-center cursor-pointer transition-all ${
            isDragActive
              ? "border-blue-400 bg-blue-500/20 backdrop-blur-sm shadow-lg shadow-blue-500/25"
              : "border-slate-300/60 bg-slate-800/30 backdrop-blur-sm hover:border-slate-200/80 hover:bg-slate-700/40"
          }`,
        })}
      >
        <input {...getInputProps()} />
        <UploadIcon
          size="xl"
          color={isDragActive ? "blue" : "white"}
          className={isDragActive ? "animate-bounce" : "animate-pulse"}
        />
        <div className="space-y-2">
          <p className="text-xl font-medium text-white">
            {isDragActive
              ? "ここにファイルをドロップ"
              : "ドラッグドロップでPDFファイルをここに"}
          </p>
          <p className="text-lg text-slate-300">または</p>
        </div>
        <Button color="green" size="large" text="ファイルを選択" />
        <div className="mt-2 text-sm text-slate-400">
          <p>対応形式: PDF</p>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
