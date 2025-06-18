package handler

import (
	"io"
	"log"
	"mime/multipart"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kikudesuyo/pdf-edition-v2/backend/service"
)

func MergePDFHandler(c *gin.Context) {
	form, err := c.MultipartForm()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "fail to parse multipart form"})
		log.Println("fail to parse multipart form:", err)
		return
	}
	files, ok := form.File["files"]
	if !ok {
		c.JSON(http.StatusBadRequest, gin.H{"error": "files not uploaded"})
		log.Println("files not uploaded")
		return
	}
	fileBytes, err := filesToBytes(files)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "fail to read files"})
		log.Println("fail to read files:", err)
		return
	}

	mergedPDF, err := service.MergePDF(fileBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "fail to merge pdf"})
		log.Println("fail to merge pdf:", err)
		return
	}
	c.Data(http.StatusOK, "application/pdf", mergedPDF)
}

func filesToBytes(files []*multipart.FileHeader) ([][]byte, error) {
	var byteArrays [][]byte
	for _, file := range files {
		f, err := file.Open()
		if err != nil {
			return nil, err
		}
		defer f.Close()

		buf, err := io.ReadAll(f)
		if err != nil {
			return nil, err
		}
		byteArrays = append(byteArrays, buf)
	}
	return byteArrays, nil
}
