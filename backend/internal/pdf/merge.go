package pdf

import (
	"bytes"
	"fmt"

	"github.com/unidoc/unipdf/v3/model"
)

func MergePDF(files [][]byte) ([]byte, error) {
	pdfWriter := model.NewPdfWriter()
	for _, file := range files {
		err := mergePDFPages(file, &pdfWriter)
		if err != nil {
			return nil, fmt.Errorf("fail to merge PDF: %v", err)
		}
	}
	var mergedPDF bytes.Buffer
	err := pdfWriter.Write(&mergedPDF)
	if err != nil {
		return nil, fmt.Errorf("fail to write PDF: %v", err)
	}
	return mergedPDF.Bytes(), nil
}

func mergePDFPages(file []byte, pdfwriter *model.PdfWriter) error {
	pdfReader, err := model.NewPdfReader(bytes.NewReader(file))
	if err != nil {
		return fmt.Errorf("fail to read PDF: %v", err)
	}
	numPages, err := pdfReader.GetNumPages()
	if err != nil {
		return fmt.Errorf("fail to get page num: %v", err)
	}
	for i := 1; i <= numPages; i++ {
		page, err := pdfReader.GetPage(i)
		if err != nil {
			return fmt.Errorf("fail to get page data: %v", err)
		}
		err = pdfwriter.AddPage(page)
		if err != nil {
			return fmt.Errorf("fail to append PDF: %v", err)
		}
	}
	return nil
}
