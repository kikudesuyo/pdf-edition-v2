package main

import (
	"fmt"
	"log"

	"github.com/pdfcpu/pdfcpu/pkg/api"
)

func main() {
	inFile := "hoge.pdf"
	outDir := "fuga"
	if err := api.SplitFile(inFile, outDir, 1, nil); err != nil {
		log.Fatalf("error splitting PDF: %v", err)
	}
	fmt.Println("success!")
}
