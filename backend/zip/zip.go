package zip

import (
	"archive/zip"
	"bytes"
	"fmt"
)

func CreateZip(files [][]byte, extension string) ([]byte, error) {
	var zipBuffer bytes.Buffer
	zipWriter := zip.NewWriter(&zipBuffer)
	for i, file := range files {
		f, err := zipWriter.Create(fmt.Sprintf("page_%d.%v", i+1, extension))
		if err != nil {
			return nil, err
		}
		_, err = f.Write(file)
		if err != nil {
			return nil, err
		}
	}
	err := zipWriter.Close()
	if err != nil {
		return nil, err
	}
	return zipBuffer.Bytes(), nil
}
