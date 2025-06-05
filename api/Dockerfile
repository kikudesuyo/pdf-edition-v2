FROM golang:1.23


WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

# Build the Go application
RUN  CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o  main ./cmd/main.go

EXPOSE 8080

# execute the binary
CMD ["./main"]