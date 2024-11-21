package pdf

import (
	"log"

	"github.com/pdfcpu/pdfcpu/pkg/api"
)

func SplitPDF(inFile string, outDir string) {
	if err := api.SplitFile(inFile, outDir, 1, nil); err != nil {
		log.Fatalf("error splitting PDF: %v", err)
	}
}
