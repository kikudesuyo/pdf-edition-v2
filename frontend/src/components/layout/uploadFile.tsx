import UploadIcon from "@/assets/icons/uploadIcon";
import Button from "@/components/common/button";

const UploadFile = () => {
  return (
    <div className="flex w-1/2 flex-col rounded-lg bg-slate-300">
      <p className="text-xl font-semibold">File Upload</p>
      <div className="flex flex-col gap-4">
        <UploadIcon size="w-20 h-20" color="blue" />
        <p className="text-xl font-semibold">Drop Your File Here</p>
        <p className="text-xl font-semibold">or</p>
        <Button color="blue" size="medium" text="Browse" />
      </div>
    </div>
  );
};

export default UploadFile;
