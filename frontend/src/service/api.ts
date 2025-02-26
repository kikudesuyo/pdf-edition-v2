import axios from "axios";

export const mergePdf = async (files: File[]) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    console.log("formData", formData);
    const response = await axios.post(
      "https://pdf-edition-v2-backend.vercel.app/api/merge_pdf",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );
    const pdfBlob = response.data;
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
    const response = await axios.post(
      "https://pdf-edtion-v2-backend.vercel.app/split",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );
    const zipBlob = response.data;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = "split_pdfs.zip";
    link.click();
  } catch (error) {
    console.error("Error splitting PDF:", error);
  }
};
