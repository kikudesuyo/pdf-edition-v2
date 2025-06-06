"use client";

import { useState } from "react";
import UploadFile from "@/components/common/uploadFile";
import Button from "@/components/common/button";
import { splitPdf } from "@/api/pdfApi";

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
    <div className="flex flex-col items-center justify-center gap-4">
      <UploadFile title="PDF 分割" onUpload={handleUpload} />

      {file && (
        <div className="text-slate-700">
          <p className="font-semibold">選択中のファイル:</p>
          <p className="text-lg">{file.name}</p>
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}

      <Button
        color="green"
        size="large"
        text={loading ? "処理中..." : "PDFを分割"}
        onClick={handleClick}
      />
    </div>
  );
};

export default SplitPdf;
