package handler

import (
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/pdf"
	"github.com/kikudesuyo/pdf-edition-v2/backend/zip"
)

func SplitPDFHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Failed to parse file", http.StatusInternalServerError)
		return
	}
	files, ok := r.MultipartForm.File["files"]
	if !ok || len(files) == 0 {
		log.Printf("File not provided: %v", http.StatusBadRequest)
		http.Error(w, "File not provided", http.StatusBadRequest)
		return
	}
	file, err := files[0].Open()
	if err != nil {
		log.Printf("failed to open file: %v", err)
		http.Error(w, fmt.Sprintf("Failed to open file: %v", err), http.StatusInternalServerError)
		return
	}
	defer file.Close()

	buf, err := io.ReadAll(file)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to read file: %v", err), http.StatusInternalServerError)
		return
	}

	splitPdfs, err := pdf.SplitPDF(buf)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to split PDF: %v", err), http.StatusInternalServerError)
		return
	}

	zipfile, err := zip.CreateZip(splitPdfs, "pdf")
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to create zip: %v", err), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/zip")
	w.Header().Set("Content-Disposition", `attachment; filename="split_pdfs.zip"`)

	_, err = w.Write(zipfile)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to write response: %v", err), http.StatusInternalServerError)
		return
	}
}
