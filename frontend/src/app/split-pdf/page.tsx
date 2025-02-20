"use client";
import UploadFile from "@/components/layout/uploadFile";

const SplitPdf = () => {
  const handleSplit = (file: File[]) => {
    console.log("Splitting PDFs", file);
  };

  return (
    <div className="flex items-center justify-center">
      <UploadFile onClick={handleSplit} />
    </div>
  );
};

export default SplitPdf;
