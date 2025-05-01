package main

import (
	"log"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/handler"
)

func CORSMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	http.HandleFunc("/api/merge-pdf", CORSMiddleware(handler.MergePDFHandler))
	http.HandleFunc("/api/split-pdf", CORSMiddleware(handler.SplitPDFHandler))

	port := ":8080"
	log.Printf("Server starting on %s...", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatalf("Could not start server: %v", err)
	}
}
