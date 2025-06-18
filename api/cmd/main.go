package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kikudesuyo/pdf-edition-v2/backend/handler"
)

var allowedOrigins = []string{
	"http://localhost:3000",
	"https://pdf-edition-v2.vercel.app",
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		origin := c.GetHeader("Origin")
		for _, o := range allowedOrigins {
			if o == origin {
				c.Header("Access-Control-Allow-Origin", origin)
				c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")
				c.Header("Access-Control-Allow-Credentials", "true")
				break
			}
		}
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusOK)
			return
		}
		c.Next()
	}
}

func main() {
	router := gin.Default()
	router.Use(CORSMiddleware())

	router.POST("/api/merge-pdf", handler.MergePDFHandler)
	router.POST("/api/split-pdf", handler.SplitPDFHandler)

	port := "8080"
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
	log.Printf("Server running on port %s", port)
}
