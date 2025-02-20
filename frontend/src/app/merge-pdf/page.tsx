"use client";

import UploadFile from "@/components/layout/uploadFile";
import { mergePdf } from "@/service/api";

const MergePdf = () => {
  const handleMerge = async (files: File[]) => {
    await mergePdf(files);
  };
  return (
    <div className="flex items-center justify-center">
      <UploadFile onClick={handleMerge} />
    </div>
  );
};

export default MergePdf;
