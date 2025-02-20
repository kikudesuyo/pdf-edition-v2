package handler

import (
	"fmt"
	"io"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/internal/pdf"
)

func MergePDFHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseMultipartForm(10 << 20)
	files, ok := r.MultipartForm.File["files"]
	if !ok {
		http.Error(w, "ファイルが選択されていません", http.StatusBadRequest)
		return
	}
	var pdfBlobs [][]byte
	for _, file := range files {
		f, err := file.Open()
		if err != nil {
			http.Error(w, fmt.Sprintf("ファイルのオープンに失敗しました: %v", err), http.StatusInternalServerError)
			return
		}
		defer f.Close()
		buf := make([]byte, file.Size)
		_, err = f.Read(buf)
		if err != nil && err != io.EOF {
			http.Error(w, fmt.Sprintf("ファイルの読み込みに失敗しました: %v", err), http.StatusInternalServerError)
			return
		}
		pdfBlobs = append(pdfBlobs, buf)
	}
	mergedPDF, err := pdf.MergePDF(pdfBlobs)
	if err != nil {
		http.Error(w, "PDFマージ中にエラーが発生しました", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", `attachment; filename="merged.pdf"`)
	w.Write(mergedPDF)
}
