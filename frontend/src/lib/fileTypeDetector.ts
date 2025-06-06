export type FileType = "pdf" | "docx" | "txt" | "xlsx" | "pptx";

export const getFileTypeFromName = (fileName: string): FileType => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  const extensionMap: Record<string, FileType> = {
    // テキストファイル
    txt: "txt",
    text: "txt",
    md: "txt",
    markdown: "txt",

    // PDF
    pdf: "pdf",

    // Word文書
    doc: "docx",
    docx: "docx",

    // Excel
    xls: "xlsx",
    xlsx: "xlsx",
    csv: "xlsx",

    // PowerPoint
    ppt: "pptx",
    pptx: "pptx",
  };

  // マッピングにない場合はデフォルトでtxtを返す
  return extensionMap[extension || ""] || "txt";
};
