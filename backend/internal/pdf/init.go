package pdf

import (
	"github.com/unidoc/unipdf/v3/common"
	"github.com/unidoc/unipdf/v3/common/license"
)

func init() {
	err := license.SetMeteredKey("923de133a84bb215473917d4384b40c160485fc1e8577edb06b8aff46ea77ea1")
	if err != nil {
		panic(err)
	}
	license.SetMeteredKeyUsageLogVerboseMode(true)
	common.SetLogger(common.NewConsoleLogger(common.LogLevelInfo))
}
