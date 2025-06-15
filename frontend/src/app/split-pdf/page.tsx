"use client";

import { useState } from "react";
import UploadFile from "@/components/common/uploadFile";
import Button from "@/components/common/button";
import { splitPdf } from "@/api/pdfApi";
import FileItem from "@/app/split-pdf/_components/fileItem";

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

  const handleDeleteFile = () => {
    setFile(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-600 to-slate-700 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            PDF分割
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            PDFファイルを選択して分割処理を実行してください
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
                <p>• 1つのPDFファイルを選択してください</p>
                <p>• ページごとに分割されます</p>
              </div>
            </div>
          </div>

          {/* 右側：ファイル表示・実行エリア */}
          <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-center text-2xl font-semibold text-white">
              選択中のファイル
            </h2>

            <div className="mb-6">
              {file ? (
                <FileItem file={file} onDelete={handleDeleteFile} />
              ) : (
                <div className="rounded-lg border-2 border-dashed border-slate-300/50 bg-slate-700/30 p-8 text-center">
                  <div className="text-slate-300">
                    <svg
                      className="mx-auto mb-4 h-12 w-12 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-lg">ファイルが選択されていません</p>
                    <p className="mt-2 text-sm text-slate-400">
                      左側でPDFファイルを選択してください
                    </p>
                  </div>
                </div>
              )}
            </div>

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
                  text={loading ? "処理中..." : "PDFを分割"}
                  onClick={handleClick}
                />
                {file && (
                  <p className="text-center text-xs text-white">
                    zip形式でダウンロードされ、ページごとに保存されます。
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

export default SplitPdf;
