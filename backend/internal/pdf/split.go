package pdf

import (
	"bytes"
	"fmt"

	"github.com/unidoc/unipdf/v3/model"
)

func SplitPDF(blob []byte) ([][]byte, error) {
	//TODO: 開始ページと終了ページを指定できるようにする
	pdfReader, err := model.NewPdfReader(bytes.NewReader(blob))
	if err != nil {
		return nil, fmt.Errorf("fail to read pdf: %v", err)
	}

	var splitPDFs [][]byte
	pageCnt, err := pdfReader.GetNumPages()
	if err != nil {
		return nil, fmt.Errorf("fail to get page count: %v", err)
	}
	for pageNum := 1; pageNum <= pageCnt; pageNum++ {
		page, err := pdfReader.GetPage(pageNum)
		if err != nil {
			return nil, fmt.Errorf("fail to get page %d: %v", pageNum, err)
		}

		pdfWriter := model.NewPdfWriter()
		err = pdfWriter.AddPage(page)
		if err != nil {
			return nil, fmt.Errorf("fail to append page %d: %v", pageNum, err)
		}

		var splitPDF bytes.Buffer
		err = pdfWriter.Write(&splitPDF)
		if err != nil {
			return nil, fmt.Errorf("fail to write split pdf: %v", err)
		}

		splitPDFs = append(splitPDFs, splitPDF.Bytes())
	}

	return splitPDFs, nil
}
