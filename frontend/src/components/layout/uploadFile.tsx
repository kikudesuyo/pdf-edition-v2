import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";

const UploadFile = () => {
  return (
    <div className="m-8 flex flex-col items-center justify-center gap-8">
      <p className="font-sans text-5xl">File Upload</p>
      <div className="flex w-1/2 flex-col items-center gap-4 rounded-lg border-4 border-dashed border-slate-300">
        <UploadIcon size="xl" color="ash" className="animate-pulse" />
        <p className="font-sans text-2xl text-slate-500">
          Drag and drop your file here
        </p>
        <p className="font-sans text-2xl text-slate-500">or</p>
        <div className="pb-4">
          <Button color="blue" size="large" text="Click" />
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
