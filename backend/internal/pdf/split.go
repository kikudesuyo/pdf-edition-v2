package pdf

import (
	"bytes"
	"fmt"

	"github.com/unidoc/unipdf/v3/model"
)

func SplitPDF(file []byte) ([][]byte, error) {
	//TODO: 開始ページと終了ページを指定できるようにする(配列にしてその配列順にページを追加していってもいいかもしれない)
	pdfReader, err := model.NewPdfReader(bytes.NewReader(file))
	if err != nil {
		return nil, fmt.Errorf("fail to read pdf: %v", err)
	}

	var pdfFiles [][]byte
	pageCnt, err := pdfReader.GetNumPages()
	if err != nil {
		return nil, fmt.Errorf("fail to get page count: %v", err)
	}
	for pageNum := 1; pageNum <= pageCnt; pageNum++ {
		page, err := pdfReader.GetPage(pageNum)
		if err != nil {
			return nil, fmt.Errorf("fail to get page %d: %v", pageNum, err)
		}
		pdfFile, err := createPDFFile(page)
		if err != nil {
			return nil, fmt.Errorf("createPDFFile: fail to append page %d: %v", pageNum, err)
		}
		pdfFiles = append(pdfFiles, pdfFile)
	}

	return pdfFiles, nil
}

func createPDFFile(page *model.PdfPage) ([]byte, error) {
	pdfWriter := model.NewPdfWriter()
	err := pdfWriter.AddPage(page)
	if err != nil {
		return nil, fmt.Errorf("fail to append page: %v", err)
	}

	var pdfbuf bytes.Buffer
	err = pdfWriter.Write(&pdfbuf)
	if err != nil {
		return nil, fmt.Errorf("fail to write split pdf: %v", err)
	}
	return pdfbuf.Bytes(), nil
}
