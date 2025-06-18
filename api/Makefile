.PHONY: dev docs docker-push deploy

GCP_PROJECT_ID = pdf-edition-v2
GCP_REGION = asia-northeast1

ARTIFACT_REPOSITORY = backend
ARTIFACT_IMAGE_NAME = api

CLOUD_RUN_SERVICE_NAME = pdf-edition-v2-api

IMAGE_TAG ?= latest

ARTIFACT_API_IMAGE_URI = ${GCP_REGION}-docker.pkg.dev/${GCP_PROJECT_ID}/${ARTIFACT_REPOSITORY}/${ARTIFACT_IMAGE_NAME}:${IMAGE_TAG}


dev:
	go run cmd/main.go

docs:
	swag init -g cmd/main.go -o docs

docker-push:
	docker build -t ${ARTIFACT_API_IMAGE_URI} .
	docker push ${ARTIFACT_API_IMAGE_URI}

deploy:
	gcloud run deploy ${CLOUD_RUN_SERVICE_NAME} \
		--image ${ARTIFACT_API_IMAGE_URI} \
		--region ${GCP_REGION} \
		--project ${GCP_PROJECT_ID} \
		--allow-unauthenticated 