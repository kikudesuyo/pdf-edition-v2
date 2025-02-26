package handler

import (
	"archive/zip"
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/internal/pdf"
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

	// ZIP ファイルに圧縮
	var zipBuffer bytes.Buffer
	zipWriter := zip.NewWriter(&zipBuffer)

	for i, pdfBytes := range splitPdfs {
		f, err := zipWriter.Create(fmt.Sprintf("page_%d.pdf", i+1))
		if err != nil {
			http.Error(w, fmt.Sprintf("Failed to create ZIP entry: %v", err), http.StatusInternalServerError)
			return
		}
		_, err = f.Write(pdfBytes)
		if err != nil {
			http.Error(w, fmt.Sprintf("Failed to write ZIP entry: %v", err), http.StatusInternalServerError)
			return
		}
	}

	err = zipWriter.Close()
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to finalize ZIP: %v", err), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/zip")
	w.Header().Set("Content-Disposition", `attachment; filename="split_pdfs.zip"`)

	_, err = w.Write(zipBuffer.Bytes())
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to write response: %v", err), http.StatusInternalServerError)
		return
	}
}
