"use client";

import { useState } from "react";
import UploadFile from "@/components/common/uploadFile";
import { mergePdf } from "@/api/pdfApi";
import Button from "@/components/common/button";
import SortableFileItemList from "@/app/merge-pdf/_components/sortableFileItemList";

const MergePdf = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(files);

  const handleUpload = (uploadedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    setError("");
  };

  const handleClick = async () => {
    if (files.length < 2) {
      setError("PDFの結合には2つ以上のファイルが必要です。");
      return;
    }
    setLoading(true);
    try {
      await mergePdf(files);
    } catch {
      setError("PDF 結合に失敗しました");
    } finally {
      setLoading(false);
      setFiles([]);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex w-2/3 flex-col items-center justify-center gap-4">
        <UploadFile title="PDF 結合" onUpload={handleUpload} />
        {error && <div className="text-red-500">{error}</div>}
        <Button
          color="green"
          size="large"
          text={loading ? "処理中..." : "PDFを結合"}
          onClick={handleClick}
        />
      </div>
      <div className="flex items-center justify-center">
        {files.length > 0 && (
          <SortableFileItemList files={files} setFiles={setFiles} />
        )}
      </div>
    </div>
  );
};

export default MergePdf;
