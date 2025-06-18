"use client";

import { useState } from "react";
import UploadFile from "@/components/common/uploadFile";
import { mergePdf } from "@/api/pdfApi";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import SortableFileItemList from "@/app/merge-pdf/_components/sortableFileItemList";
import { v4 as uuidv4 } from "uuid";
import type { FileItem } from "@/app/merge-pdf/types";
import FilesStackIcon from "@/assets/icons/filesStackIcon";

const MergePdf = () => {
  const [fileItems, setFileItems] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filename, setFilename] = useState("");
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
      const outputFilename = filename.trim() || "merged";
      await mergePdf(files, outputFilename);
    } catch {
      setError("PDF 結合に失敗しました");
    } finally {
      setLoading(false);
      setFileItems([]);
      setFilename("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-600 to-slate-700 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            PDF結合
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            複数のPDFファイルを選択して結合処理を実行してください
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 左側：アップロードエリア */}
          <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-2xl font-semibold text-white">
                ファイルアップロード
              </h2>
              <UploadFile onUpload={handleUpload} />
              <div className="text-center text-sm text-slate-300">
                <p>• 2つ以上のPDFファイルが必要です</p>
                <p>• ファイルの順序はドラッグで変更できます</p>
              </div>
            </div>
          </div>

          {/* 右側：ファイル一覧・実行エリア */}
          <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-center text-2xl font-semibold text-white">
              ファイル一覧 ({fileItems.length}件)
            </h2>

            <div className="mb-6">
              {fileItems.length > 0 ? (
                <SortableFileItemList
                  fileItems={fileItems}
                  setFiles={setFileItems}
                />
              ) : (
                <div className="rounded-lg border-2 border-dashed border-slate-300/50 bg-slate-700/30 p-8 text-center">
                  <div className="flex flex-col items-center justify-center gap-4 text-slate-300">
                    <FilesStackIcon size="lg" color="gray" />
                    <p className="text-lg">
                      アップロードされたファイルがありません
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      PDFファイルを選択してください
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ファイル名入力エリア */}
            {fileItems.length > 0 && (
              <div className="mb-6 border-t border-slate-300/20 pt-6">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-white">
                    結合後のファイル名
                  </label>
                  <Input
                    value={filename}
                    onChange={setFilename}
                    placeholder="merged"
                    disabled={loading}
                  />
                  <p className="text-xs text-slate-400">
                    ファイル名を入力してください（.pdfは自動で追加されます）
                  </p>
                </div>
              </div>
            )}

            {/* 実行ボタンエリア */}
            <div className="border-t border-slate-300/20 pt-6">
              <div className="flex flex-col items-center gap-4">
                {error && (
                  <div className="w-full rounded-lg border border-red-400 bg-red-500/20 px-4 py-2 text-center text-red-200 backdrop-blur-sm">
                    {error}
                  </div>
                )}
                <Button
                  color="red"
                  size="large"
                  text={loading ? "処理中..." : "PDFを結合"}
                  onClick={handleClick}
                />
                {fileItems.length > 0 && (
                  <p className="text-center text-xs text-slate-400">
                    上から順番に結合されます
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergePdf;
