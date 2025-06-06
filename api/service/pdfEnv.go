package service

import (
	"log"
	"os"
	"sync"

	"github.com/joho/godotenv"
	"github.com/unidoc/unipdf/v3/common/license"
)

var once sync.Once

func setupUniPDFLicnese() {
	once.Do(func() {
		if os.Getenv("UNICODE_LICENSE") == "" {
			err := godotenv.Load()
			if err != nil {
				log.Fatal("Error loading .env file")
			}
		}
		licenseKey := os.Getenv("UNICODE_LICENSE")

		if licenseKey == "" {
			log.Println("UNICODE_LICENSE is not set!! A")
		}
		err := license.SetMeteredKey(licenseKey)
		if err != nil {
			log.Println("UNICODE_LICENSE is not set!! B")
			panic(err)
		}
		os.Setenv("UNIDOC_LICENSE_DIR", "/tmp/unidoc_license")
	})
}
