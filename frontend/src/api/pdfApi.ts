import { requestPost } from "@/api/request";

const MERGE_PDF_ENDPOINT = "/api/merge-pdf";
const SPLIT_PDF_ENDPOINT = "/api/split-pdf";

export const mergePdf = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));
  const blob = await requestPost<Blob>(MERGE_PDF_ENDPOINT, formData, {
    responseType: "blob",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "merged.pdf";
  link.click();
  // メモリリーク防止にURLを解放
  URL.revokeObjectURL(link.href);
};

export const splitPdf = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const blob = await requestPost<Blob>(SPLIT_PDF_ENDPOINT, formData, {
    responseType: "blob",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "split_pdfs.zip";
  link.click();
  // メモリリーク防止にURLを解放
  URL.revokeObjectURL(link.href);
};
