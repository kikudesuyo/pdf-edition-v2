package main

import (
	"log"
	"net/http"

	"github.com/kikudesuyo/pdf-edition-v2/internal/handler"
	"github.com/rs/cors"
)

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})
	http.HandleFunc("/merge", handler.MergePDFHandler)

	handler := c.Handler(http.DefaultServeMux)
	port := ":8080"
	log.Printf("Server starting on %s...", port)
	if err := http.ListenAndServe(port, handler); err != nil {
		log.Fatalf("Could not start server: %v", err)
	}
}
