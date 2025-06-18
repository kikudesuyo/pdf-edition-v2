package main

import (
	"log"
	"net/http"
	"os"

	"github.com/kikudesuyo/pdf-edition-v2/backend/handler"
	httpSwagger "github.com/swaggo/http-swagger"
	_ "github.com/kikudesuyo/pdf-edition-v2/backend/docs"
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
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		}

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// @title PDF Edition API
// @version 2.0
// @description API for PDF operations including merge and split functionality
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name MIT
// @license.url https://opensource.org/licenses/MIT

// @host localhost:8080
// @BasePath /api
func main() {
	http.HandleFunc("/api/merge-pdf", CORSMiddleware(handler.MergePDFHandler))
	http.HandleFunc("/api/split-pdf", CORSMiddleware(handler.SplitPDFHandler))
	
	// Swagger UI endpoint
	http.HandleFunc("/swagger/", httpSwagger.WrapHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port if not set
	}
	addr := ":" + port
	log.Printf("Server starting on %s...", addr)
	log.Printf("Swagger UI available at http://localhost:%s/swagger/", port)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("Could not start server: %v", err)
	}
}
