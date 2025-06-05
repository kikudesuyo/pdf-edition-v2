"use client";

import UploadFile from "@/components/layout/uploadFile";
import { mergePdf } from "@/api/pdfApi";

const MergePdf = () => {
  return (
    <div className="flex items-center justify-center">
      <UploadFile onClick={mergePdf} title="PDF 結合" />
    </div>
  );
};

export default MergePdf;
