
### Docker(ローカル環境)

ビルド
docker build -t pdf-edition-v2-api .

起動
docker run -d -p 8080:8080 --name pdf-edition-v2-api  pdf-edition-v2-api

ポート: 8080にアクセス

http:

### デプロイ

Google Cloud を採用

- Artifact Registryにコンテナを保存
- GCP RUNにデプロイ
