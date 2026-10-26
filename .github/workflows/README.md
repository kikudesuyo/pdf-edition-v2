# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automating various tasks in the pdf-edition-v2 project.

## deploy-api.yml

This workflow automatically deploys the API to Google Cloud Run when changes are merged to the main branch and there are changes in the `api` directory.

### Workflow Details

- **Trigger**: Push to the `main` branch with changes in the `api` directory
- **Actions**:
  1. Checkout the repository
  2. Set up Google Cloud SDK
  3. Authenticate to Google Cloud using Workload Identity Federation
  4. Set up Docker Buildx
  5. Configure Docker for GCP Artifact Registry
  6. Build and push the Docker image using the Makefile
  7. Deploy to Cloud Run using the Makefile

### Required Secrets

The following secrets need to be configured in the GitHub repository settings:

- `WORKLOAD_IDENTITY_PROVIDER`: The Workload Identity Provider for GCP authentication
- `SERVICE_ACCOUNT`: The GCP service account email for deployment

### Setup Instructions

1. Create a service account in GCP with the necessary permissions for Artifact Registry and Cloud Run
2. Set up Workload Identity Federation in GCP
3. Add the required secrets to the GitHub repository settings