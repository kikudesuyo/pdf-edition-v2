"use client";

import React, { useState } from "react";
import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";
import { Text } from "@yamada-ui/react";
import { Dropzone } from "@yamada-ui/dropzone";
import { mergePdf } from "@/service/api";

const UploadFile = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) =>
      prevFiles ? [...prevFiles, ...acceptedFiles] : acceptedFiles
    );
  };

  const handleMerge = async () => {
    if (!files) {
      setError("ファイルが選択されていません");
      return;
    }
    setLoading(true);
    setError("");
    await mergePdf(files);
    setLoading(false);
  };

  return (
    <div className="m-8 flex w-1/2 flex-col items-center justify-center gap-8">
      <Text className="text-4xl font-semibold text-slate-600">File Upload</Text>
      <Dropzone
        className="flex w-1/2 flex-col items-center gap-4 rounded-lg border-4 border-dashed"
        focusBorderColor="gray.400"
        onDrop={handleDrop}
      >
        <UploadIcon size="xl" color="gray" className="animate-pulse" />
        <Text className="font-sans text-2xl text-slate-500">
          Drag and drop your file here
        </Text>
        <Text className="font-sans text-2xl text-slate-500">or</Text>
        <div className="pb-4">
          <Button color="blue" size="large" text="PDFファイルを選択" />
        </div>
      </Dropzone>

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
        onClick={handleMerge}
      />
    </div>
  );
};

export default UploadFile;
