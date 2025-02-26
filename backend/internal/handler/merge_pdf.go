package handler

import (
	"fmt"
	"io"
	"mime/multipart"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/internal/pdf"
)

func MergePDFHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "fail to parse file:", http.StatusInternalServerError)
		return
	}
	files, ok := r.MultipartForm.File["files"]
	if !ok {
		http.Error(w, "files not uploaded", http.StatusBadRequest)
		return
	}
	pdfBlobs, err := readPDFFiles(files)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	mergedPDF, err := pdf.MergePDF(pdfBlobs)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", `attachment; filename="merged.pdf"`)
	w.Write(mergedPDF)
}

func readPDFFiles(files []*multipart.FileHeader) ([][]byte, error) {
	var pdfBlobs [][]byte

	for _, file := range files {
		f, err := file.Open()
		if err != nil {
			return nil, fmt.Errorf("fail to open file: %v", err)
		}
		defer f.Close()

		buf := make([]byte, file.Size)
		if _, err := f.Read(buf); err != nil && err != io.EOF {
			return nil, fmt.Errorf("fail to read file: %v", err)
		}
		pdfBlobs = append(pdfBlobs, buf)
	}

	return pdfBlobs, nil
}
