"use client";

import { useState } from "react";
import UploadFile from "@/components/common/uploadFile";
import Button from "@/components/common/button";
import { splitPdf } from "@/api/pdfApi";
import FileItem from "@/components/ui/fileItem";

const SplitPdf = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = (files: File[]) => {
    if (files.length > 1) {
      setError("PDFの分割は1ファイルのみ対応しています。");
      return;
    }
    setFile(files[0]);
    setError("");
  };

  const handleClick = async () => {
    if (!file) {
      setError("ファイルが選択されていません");
      return;
    }
    setLoading(true);
    try {
      await splitPdf(file);
    } catch {
      setError("PDF 分割に失敗しました");
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <p className="text-5xl font-semibold text-slate-600">PDF分割</p>
      <div className="flex w-full">
        <div className="flex w-2/3 flex-col items-center justify-center gap-4">
          <UploadFile onUpload={handleUpload} />
          {error && <div className="text-red-500">{error}</div>}
          <Button
            color="green"
            size="large"
            text={loading ? "処理中..." : "PDFを分割"}
            onClick={handleClick}
          />
        </div>
        <div className="flex w-1/4 flex-col gap-12">
          <p className="text-center text-3xl font-semibold text-slate-600">
            選択中のファイル
          </p>
          {file ? (
            <FileItem file={file} />
          ) : (
            <div className="text-center text-gray-500">
              ファイルが選択されていません
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitPdf;
