import { useState } from "react";

type uploadConfig = {
  accept: { [key: string]: string[] };
  maxFiles: number;
  multiple: boolean;
  noClick: boolean;
  setAccept: (accept: { [key: string]: string[] }) => void;
  setMaxFiles: (maxFiles: number) => void;
  setMultiple: (multiple: boolean) => void;
  setNoClick: (noClick: boolean) => void;
};

export const useUploadConfig = (): uploadConfig => {
  const [accept, setAccept] = useState<{ [key: string]: string[] }>({
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      ".xlsx",
    ],
    "application/vnd.ms-excel": [".xls"],
  });
  const [maxFiles, setMaxFiles] = useState<number>(1);
  const [multiple, setMultiple] = useState<boolean>(false);
  const [noClick, setNoClick] = useState<boolean>(false);

  return {
    accept,
    maxFiles,
    multiple,
    noClick,
    setAccept,
    setMaxFiles,
    setMultiple,
    setNoClick,
  };
};
