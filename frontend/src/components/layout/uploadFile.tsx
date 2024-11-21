"use client";

import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";
import { Text } from "@yamada-ui/react";
import { Dropzone } from "@yamada-ui/dropzone";

const UploadFile = () => {
  return (
    <div className="m-8 flex w-1/2 flex-col items-center justify-center gap-8">
      <Text className="text-4xl font-semibold text-slate-600">File Upload</Text>
      <Dropzone
        className="flex w-1/2 flex-col items-center gap-4 rounded-lg border-4 border-dashed"
        focusBorderColor="gray.400"
      >
        <UploadIcon size="xl" color="gray" className="animate-pulse" />
        <Text className="font-sans text-2xl text-slate-500">
          Drag and drop your file here
        </Text>
        <Text className="font-sans text-2xl text-slate-500">or</Text>
        <div className="pb-4">
          <Button color="blue" size="large" text="PDFファイルを選択" />
        </div>
      </Dropzone>
    </div>
  );
};

export default UploadFile;
