"use client";
import UploadFile from "@/components/layout/uploadFile";
import { splitPdf } from "@/service/api";

const SplitPdf = () => {
  return (
    <div className="flex items-center justify-center">
      <UploadFile onClick={splitPdf} title="PDF 分割" />
    </div>
  );
};

export default SplitPdf;
