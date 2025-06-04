import { requestPost } from "@/api/request";

export const mergePdf = async (files: File[]) =>
  downloadFile("/api/merge-pdf", files, "merged.pdf");

export const splitPdf = async (files: File[]) => {
  if (files.length !== 1) {
    throw new Error("PDFの分割は1ファイルのみ対応しています。");
  }
  downloadFile("/api/split-pdf", files, "split_pdfs.zip");
};

const downloadFile = async (
  endpoint: string,
  files: File[],
  filename: string
) => {
  try {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const blob = await requestPost<Blob>(endpoint, formData, {
      responseType: "blob",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    // メモリリーク防止にURLを解放
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
};
