# pdf-edition-v2

PDF ファイルの結合と分割を行うアプリケーション

## 使用技術

Web frontend: [![My Skills](https://skillicons.dev/icons?i=react,typescript,nextjs,tailwindcss,vercel)](https://skillicons.dev)

Api backend: [![My Skills](https://skillicons.dev/icons?i=go,gcp)](https://skillicons.dev)

## 機能

- **PDF結合**: 複数のPDFファイルを1つのファイルにマージ
- **PDF分割**: PDFファイルを個別のページに分割
- **API ドキュメント**: OpenAPI/Swagger仕様による詳細なAPIドキュメント

## API ドキュメント

このプロジェクトはOpenAPI 3.0仕様に基づいたSwagger UIを提供しています。

### ローカル環境でのアクセス

APIサーバーを起動後、以下のURLでSwagger UIにアクセスできます：

```
http://localhost:8080/swagger/
```

### 利用可能なエンドポイント

- `POST /api/merge-pdf` - 複数のPDFファイルをマージ
- `POST /api/split-pdf` - PDFファイルを分割

詳細な仕様とテスト機能はSwagger UIで確認できます。


