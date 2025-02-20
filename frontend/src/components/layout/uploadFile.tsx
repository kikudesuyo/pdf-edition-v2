"use client";

import React, { useState } from "react";
import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";
import { useDropzone } from "react-dropzone";

type Props = {
  onClick: (files: File[]) => Promise<void>;
};

const UploadFile = ({ onClick }: Props) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [],
    },
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles);
    },
  });

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) =>
      prevFiles ? [...prevFiles, ...acceptedFiles] : acceptedFiles
    );
  };

  const handleClick = async () => {
    if (!files) {
      setError("ファイルが選択されていません");
      return;
    }
    setLoading(true);
    setError("");
    await onClick(files);
    setLoading(false);
  };

  return (
    <div className="m-8 flex w-1/2 flex-col items-center justify-center gap-8">
      <p className="text-4xl font-semibold text-slate-600">File Upload</p>
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

      {files && (
        <div className="mt-4 text-lg text-slate-700">
          {files.map((file, index) => (
            <div key={index}>{file.name}</div>
          ))}
        </div>
      )}

      {error && <div className="mt-4 text-red-600">{error}</div>}

      <Button
        color="green"
        size="large"
        text={loading ? "アップロード中..." : "アップロード"}
        onClick={handleClick}
      />
    </div>
  );
};

export default UploadFile;
