import { create } from "zustand";
import { FileWithPath, FileRejection } from "react-dropzone";

type FileUploaderState = {
  isDragging: boolean;
  selectedFiles: FileWithPath[];
  setIsDragging: (isDragging: boolean) => void;
  onDrop: (acceptedFiles: File[]) => void;
  onDropRejected: (fileRejections: FileRejection[]) => void;
  handleRemoveFile: () => void;
};

export const useUploaderStore = create<FileUploaderState>((set) => ({
  isDragging: false,
  selectedFiles: [],
  setIsDragging: (isDragging) => set({ isDragging }),
  onDrop: (acceptedFiles) => {
    set({ selectedFiles: acceptedFiles });
    set({ isDragging: false });
  },
  onDropRejected: (fileRejections) => {
    if (fileRejections.length > 1) {
      alert("Please only upload one file at a time.");
    }
    const { file, errors } = fileRejections[0];
    if (errors[0].code === "file-invalid-type") {
      alert(`Invalid file type: ${file.name}.\nPlease upload an Excel file.`);
    }

    set({ isDragging: false });
  },
  handleRemoveFile: () => set({ selectedFiles: [] }),
}));
