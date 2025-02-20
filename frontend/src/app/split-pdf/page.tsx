import UploadFile from "@/components/layout/uploadFile";

const SplitPdf = () => {
  const handleSplit = async (file: File[]) => {
    console.log("Splitting PDFs", file);
  };

  return (
    <div className="flex items-center justify-center">
      <UploadFile onClick={handleSplit} />
    </div>
  );
};

export default SplitPdf;
