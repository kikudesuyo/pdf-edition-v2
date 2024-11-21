package pdf

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/unidoc/unipdf/v3/common"
	"github.com/unidoc/unipdf/v3/common/license"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	licenseKey := os.Getenv("UNIDOC_LICENSE_KEY")
	err = license.SetMeteredKey(licenseKey)
	if err != nil {
		panic(err)
	}
	license.SetMeteredKeyUsageLogVerboseMode(true)
	common.SetLogger(common.NewConsoleLogger(common.LogLevelInfo))
}
