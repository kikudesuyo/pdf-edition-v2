package api

import (
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/handler"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost:
		handler.SplitPDFHandler(w, r)
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}
