package handler

import (
	"log"
	"mime/multipart"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/service"
)

func MergePDFHandler(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseMultipartForm(10 << 20); err != nil {
		http.Error(w, "fail to parse multipart form", http.StatusInternalServerError)
		log.Println("fail to parse multipart form:", err)
		return
	}

	files, ok := r.MultipartForm.File["files"]
	if !ok {
		http.Error(w, "files not uploaded", http.StatusBadRequest)
		log.Println("files not uploaded")
		return
	}

	fileBytes, err := filesToBytes(files)
	if err != nil {
		http.Error(w, "fail to read files", http.StatusInternalServerError)
		log.Println("fail to read files:", err)
		return
	}

	mergedPDF, err := service.MergePDF(fileBytes)
	if err != nil {
		http.Error(w, "fail to merge pdf", http.StatusInternalServerError)
		log.Println("fail to merge pdf:", err)
		return
	}

	w.Header().Set("Content-Type", "application/pdf")
	w.Write(mergedPDF)
}

func filesToBytes(files []*multipart.FileHeader) ([][]byte, error) {
	var byteArrays [][]byte
	for _, file := range files {
		f, err := file.Open()
		if err != nil {
			return nil, err
		}
		defer f.Close()

		buf := make([]byte, file.Size)
		if _, err := f.Read(buf); err != nil {
			return nil, err
		}
		byteArrays = append(byteArrays, buf)
	}
	return byteArrays, nil
}
