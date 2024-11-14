package main

import (
	"log"

	"github.com/pdfcpu/pdfcpu/pkg/api"
)

func main() {
	inFile := "hoge.pdf"
	outDir := "fuga"
	splitFiles(inFile, outDir)
	pdfFiles := []string{"fuga/hoge_1.pdf", "fuga/hoge_2.pdf", "fuga/hoge_3.pdf"}
	mergeFiles(pdfFiles)
}

func splitFiles(inFile string, outDir string) {
	if err := api.SplitFile(inFile, outDir, 1, nil); err != nil {
		log.Fatalf("error splitting PDF: %v", err)
	}
}

func mergeFiles(files []string) {
	if err := api.MergeCreateFile(files, "hoge.pdf", false, nil); err != nil {
		log.Fatalf("error splitting PDF: %v", err)
	}

}
