package handler

import (
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kikudesuyo/pdf-edition-v2/backend/service"
)

func SplitPDFHandler(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Failed to get file from form: %v", err)})
		log.Printf("[SplitPDFHandler] Failed to get file from form: %v", err)
		return
	}

	pdfBytes, err := fileToByte(file)
	if err != nil {
		log.Printf("[SplitPDFHandler] Failed to read file: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to read file: %v", err)})
		return
	}
	splitPdfs, err := service.SplitPDF(pdfBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to split PDF: %v", err)})
		return
	}
	zipfile, err := service.CreateZip(splitPdfs, "pdf")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Failed to create zip file: %v", err)})
		return
	}
	c.Header("Content-Disposition", "attachment; filename=split_pdf.zip")
	c.Data(http.StatusOK, "application/zip", zipfile)
}

func fileToByte(file *multipart.FileHeader) ([]byte, error) {
	f, err := file.Open()
	if err != nil {
		return nil, fmt.Errorf("failed to open file: %v", err)
	}
	defer f.Close()
	return io.ReadAll(f)
}
