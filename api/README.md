
### Docker(ローカル環境)

ビルド
docker build -t pdf-edition-v2-api .

起動
docker run -d -p 8080:8080 --name pdf-edition-v2-api  pdf-edition-v2-api

ポート: 8080


## デプロイ

Google Cloud Platform を採用


### Artifact Registryにリポジトリ作成(初回のみ)

リポジトリ名: backend

```bash
gcloud artifacts repositories create backend \
  --repository-format=docker \
  --location=asia-northeast1 \
  --description="Docker repository for pdf-edition-v2 backend images"
```

### APIのDockerイメージをビルドしてArtifact Registryにプッシュする

イメージ名: api

docker ビルド
```bash
docker build -t asia-northeast1-docker.pkg.dev/pdf-edition-v2/backend/api .
```

docker push
```bash
docker push asia-northeast1-docker.pkg.dev/pdf-edition-v2/backend/api
```

### Artifact Registry にプッシュしたイメージをCloud Runにデプロイ

#### GUiでデプロイ
GUIで作成したArtifact Registry内のリポジトリを選択してデプロイをする

#### GLIでデプロイ

```bash
gcloud run deploy pdf-edition-v2-api \
  --image=asia-northeast1-docker.pkg.dev/pdf-edition-v2/backend/api \
  --region=asia-northeast1
  --allow-unauthenticated 
``` 

初回のデプロイのメッセージ
```
# Yesを選択する
Allow unauthenticated invocations to [pdf-edition-v2-api] (y/N)?  y
```

### 設定内容

region: asia-northeast1
認証: なし
リクエスト