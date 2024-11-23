package pdf

import (
	"bytes"
	"fmt"

	"github.com/unidoc/unipdf/v3/model"
)

func MergePDF(blobs [][]byte) ([]byte, error) {
	var mergedPDF bytes.Buffer
	var pdfDocs []*model.PdfReader
	for _, blob := range blobs {
		pdfReader, err := model.NewPdfReader(bytes.NewReader(blob))
		if err != nil {
			return nil, fmt.Errorf("PDFの読み込みに失敗しました: %v", err)
		}
		pdfDocs = append(pdfDocs, pdfReader)
	}
	pdfWriter := model.NewPdfWriter()
	for _, pdfDoc := range pdfDocs {
		numPages, err := pdfDoc.GetNumPages()
		if err != nil {
			return nil, fmt.Errorf("ページ数の取得に失敗しました: %v", err)
		}
		for i := 1; i <= numPages; i++ {
			page, err := pdfDoc.GetPage(i)
			if err != nil {
				return nil, fmt.Errorf("ページの取得に失敗しました: %v", err)
			}
			err = pdfWriter.AddPage(page)
			if err != nil {
				return nil, fmt.Errorf("ページの追加に失敗しました: %v", err)
			}
		}
	}
	err := pdfWriter.Write(&mergedPDF)
	if err != nil {
		return nil, fmt.Errorf("PDFの書き込みに失敗しました: %v", err)
	}
	return mergedPDF.Bytes(), nil
}
