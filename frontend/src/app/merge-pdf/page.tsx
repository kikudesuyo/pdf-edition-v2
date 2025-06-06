"use client";

import { useState } from "react";
import UploadFile from "@/components/layout/uploadFile";
import { mergePdf } from "@/api/pdfApi";
import Button from "@/components/common/button";

const MergePdf = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div className="flex flex-col items-center justify-center gap-4">
      <UploadFile title="PDF 結合" onUpload={handleUpload} />
      {files.length > 0 && (
        <div className="text-slate-700">
          <p className="font-semibold">選択中のファイル:</p>
          <ul className="list-disc pl-5">
            {files.map((file, index) => (
              <li key={index} className="text-lg">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
      <Button
        color="green"
        size="large"
        text={loading ? "処理中..." : "PDFを結合"}
        onClick={handleClick}
      />
    </div>
  );
};

export default MergePdf;
