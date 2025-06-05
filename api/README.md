
### Docker

ビルド
docker build -t pdf-edition-v2-api .

起動
docker run -d -p 8080:8080 --name pdf-edition-v2-api  pdf-edition-v2-api
