FROM golang:latest


WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o httpserver ./cmd/httpserver


EXPOSE 8080

CMD ["./httpserver"]