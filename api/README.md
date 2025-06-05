## ローカル環境での開発

ポート: 8080

以下の1,2のいずれかの方法でサーバーを起動します。

### 1. Dockerを使用した開発環境の構築

#### ビルド
```bash
docker build -t pdf-edition-v2-api .
```

#### 起動

```bash
docker run -d -p 8080:8080 --name pdf-edition-v2-api  pdf-edition-v2-api
```

### 2. Dockerを使用せずにサーバーを起動させる場合

```bash
make dev
```

## デプロイ

Google Cloud Platform を採用


### Artifact Registryにリポジトリ作成(初回のみ)

#### リポジトリ名: backend

```bash
gcloud artifacts repositories create backend \
  --repository-format=docker \
  --location=asia-northeast1 \
  --description="Docker repository for pdf-edition-v2 backend images"
```

### DockerイメージをビルドしてArtifact Registryにプッシュする

```bash
make docker-push
```

### Cloud Runへデプロイ

DockerイメージをCloud Runにデプロイします。

```bash
make deploy
```