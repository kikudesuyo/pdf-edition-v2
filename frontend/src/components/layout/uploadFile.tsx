import { useDropzone } from "react-dropzone";
import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";

type Props = {
  title: string;
  onUpload: (files: File[]) => void;
};

const UploadFile = ({ title, onUpload }: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [] },
    onDrop: (acceptedFiles) => {
      onUpload(acceptedFiles);
    },
  });

  return (
    <div className="m-8 flex w-1/2 flex-col items-center justify-center gap-8">
      <p className="text-4xl font-semibold text-slate-600">{title}</p>

      <div
        {...getRootProps({
          className: `flex w-full flex-col items-center justify-center gap-4 p-8 border-4 border-dashed rounded-lg text-center cursor-pointer ${
            isDragActive
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 bg-gray-50"
          }`,
        })}
      >
        <input {...getInputProps()} />
        <UploadIcon
          size="xl"
          color={isDragActive ? "blue" : "gray"}
          className="animate-pulse"
        />
        <p className="font-sans text-xl text-slate-500">
          {isDragActive
            ? "ここにファイルをドロップ"
            : "ドラッグドロップでPDFファイルをここに"}
        </p>
        <p className="font-sans text-xl text-slate-500">または</p>
        <Button color="blue" size="large" text="ファイルを選択" />
      </div>
    </div>
  );
};

export default UploadFile;
