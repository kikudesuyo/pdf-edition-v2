import axios from "axios";

export const mergePdf = async (files: File[]) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    console.log("formData", formData);
    const response = await axios.post("http://localhost:8080/merge", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });
    const pdfBlob = response.data;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.download = "merged.pdf";
    link.click();
  } catch (error) {
    console.error("Error merging PDFs:", error);
  }
};
