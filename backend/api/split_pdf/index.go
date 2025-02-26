package api

import (
	"encoding/json"
	"log"
	"net/http"
)

type Hello struct {
	ID      string `json:"id"`
	Message string `json:"message"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h := Hello{
			ID:      "1",
			Message: "split!!",
		}
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(http.StatusOK)
		if err := json.NewEncoder(w).Encode(h); err != nil {
			log.Println(err)
		}
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}
