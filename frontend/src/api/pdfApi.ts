import { requestPost } from "@/api/request";

export const mergePdf = async (files: File[]) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    const pdfBlob = await requestPost<Blob>("/api/merge-pdf", formData, {
      responseType: "blob",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.download = "merged.pdf";
    link.click();
  } catch (error) {
    console.error("Error merging PDFs:", error);
  }
};

export const splitPdf = async (files: File[]) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    const zipBlob = await requestPost<Blob>("/api/split-pdf", formData, {
      responseType: "blob",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = "split_pdfs.zip";
    link.click();
  } catch (error) {
    console.error("Error splitting PDF:", error);
  }
};
