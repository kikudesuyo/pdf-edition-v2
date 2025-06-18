package handler

import (
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/service"
)

// SplitPDFHandler splits a PDF file into individual pages
// @Summary Split PDF file
// @Description Split a PDF file into individual pages and return as a ZIP archive
// @Tags PDF Operations
// @Accept multipart/form-data
// @Produce application/zip
// @Param file formData file true "PDF file to split"
// @Success 200 {file} file "ZIP archive containing individual PDF pages"
// @Failure 400 {string} string "Bad Request - file not provided or multiple files"
// @Failure 500 {string} string "Internal Server Error"
// @Router /split-pdf [post]
func SplitPDFHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Failed to parse file", http.StatusInternalServerError)
		return
	}
	files, ok := r.MultipartForm.File["file"]
	if !ok || len(files) == 0 {
		log.Printf("File not provided: %v", http.StatusBadRequest)
		http.Error(w, "File not provided", http.StatusBadRequest)
		return
	}
	if len(files) != 1 {
		log.Printf("Only one file is allowed: %v", http.StatusBadRequest)
		http.Error(w, "Only one file is allowed", http.StatusBadRequest)
		return
	}

	pdfBytes, err := fileToByte(files[0])
	if err != nil {
		log.Printf("Failed to read file: %v", err)
		http.Error(w, fmt.Sprintf("Failed to read file: %v", err), http.StatusInternalServerError)
		return
	}
	splitPdfs, err := service.SplitPDF(pdfBytes)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to split PDF: %v", err), http.StatusInternalServerError)
		return
	}
	zipfile, err := service.CreateZip(splitPdfs, "pdf")
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to create zip: %v", err), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/zip")

	_, err = w.Write(zipfile)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to write response: %v", err), http.StatusInternalServerError)
		return
	}
}

func fileToByte(file *multipart.FileHeader) ([]byte, error) {
	f, err := file.Open()
	if err != nil {
		return nil, fmt.Errorf("failed to open file: %v", err)
	}
	defer f.Close()
	return io.ReadAll(f)
}
