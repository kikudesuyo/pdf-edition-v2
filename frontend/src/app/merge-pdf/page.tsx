"use client";

import { useState } from "react";
import UploadFile from "@/components/common/uploadFile";
import { mergePdf } from "@/api/pdfApi";
import Button from "@/components/common/button";
import SortableFileItemList from "@/app/merge-pdf/_components/sortableFileItemList";
import { v4 as uuidv4 } from "uuid";

type FileItem = {
  uid: string;
  file: File;
};

const MergePdf = () => {
  const [fileItems, setFileItems] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(fileItems);

  const handleUpload = (uploadedFiles: File[]) => {
    const wrappedFiles: FileItem[] = uploadedFiles.map((file) => ({
      uid: uuidv4(),
      file,
    }));
    setFileItems((prevFiles) => [...prevFiles, ...wrappedFiles]);
    setError("");
  };

  const handleClick = async () => {
    if (fileItems.length < 2) {
      setError("PDFの結合には2つ以上のファイルが必要です。");
      return;
    }
    setLoading(true);
    try {
      const files = fileItems.map((item) => item.file);
      await mergePdf(files);
    } catch {
      setError("PDF 結合に失敗しました");
    } finally {
      setLoading(false);
      setFileItems([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <p className="text-5xl font-semibold text-slate-600">PDF結合</p>
      <div className="flex w-full">
        <div className="flex w-2/3 flex-col items-center justify-center gap-4">
          <UploadFile onUpload={handleUpload} />
          {error && <div className="text-red-500">{error}</div>}
          <Button
            color="green"
            size="large"
            text={loading ? "処理中..." : "PDFを結合"}
            onClick={handleClick}
          />
        </div>
        <div className="flex w-1/4 flex-col gap-12">
          <p className="text-center text-3xl font-semibold text-slate-600">
            ファイル一覧
          </p>
          <SortableFileItemList fileItems={fileItems} setFiles={setFileItems} />
        </div>
      </div>
    </div>
  );
};

export default MergePdf;
export type { FileItem };
