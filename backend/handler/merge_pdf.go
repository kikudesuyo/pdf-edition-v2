package handler

import (
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/internal/pdf"
)

func MergePDFHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")

	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "fail to parse file:", http.StatusInternalServerError)
		log.Println("fail to parse file:", err)
		return
	}
	files, ok := r.MultipartForm.File["files"]
	if !ok {
		http.Error(w, "files not uploaded", http.StatusBadRequest)
		log.Println("files not uploaded")
		return
	}
	pdffiles, err := readPDFFiles(files)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Println(err)
		return
	}
	mergedPDF, err := pdf.MergePDF(pdffiles)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Println(err)
		return
	}
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", `attachment; filename="merged.pdf"`)
	w.Write(mergedPDF)
}

func readPDFFiles(files []*multipart.FileHeader) ([][]byte, error) {
	var pdffiles [][]byte

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
		pdffiles = append(pdffiles, buf)
	}

	return pdffiles, nil
}
