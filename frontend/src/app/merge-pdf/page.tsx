"use client";

import UploadFile from "@/components/layout/uploadFile";
import { mergePdf } from "@/service/api";

const MergePdf = () => {
  const handleMerge = async (files: File[]) => {
    await mergePdf(files);
  };
  return <UploadFile onClick={handleMerge} />;
};

export default MergePdf;
