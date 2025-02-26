package pdf

import (
	"os"

	"github.com/unidoc/unipdf/v3/common"
	"github.com/unidoc/unipdf/v3/common/license"
)

func init() {
	licenseKey := os.Getenv("UNIDOC_LICENSE")
	if licenseKey == "" {
		panic("UNIDOC_LICENSE environment variable not set")
	}
	err := license.SetMeteredKey(licenseKey)
	if err != nil {
		panic(err)
	}
	license.SetMeteredKeyUsageLogVerboseMode(true)
	common.SetLogger(common.NewConsoleLogger(common.LogLevelInfo))
}
