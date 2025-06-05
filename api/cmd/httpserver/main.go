package main

import (
	"log"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/backend/handler"
)

var allowedOrigins = []string{
	"http://localhost:3000",
	"https://pdf-edition-v2.vercel.app",
}

func isOriginAllowed(origin string) bool {
	for _, o := range allowedOrigins {
		if o == origin {
			return true
		}
	}
	return false
}

func CORSMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if isOriginAllowed(origin) {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		}

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
