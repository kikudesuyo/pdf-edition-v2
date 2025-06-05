get_env_var() {
  local env_file="$1"
  local var_name="$2"
  echo $(grep "^$var_name=" "$env_file" | cut -d '=' -f2-)
}


env_file=".env"

if [[ ! -f "$env_file" ]]; then
  echo ".env ファイルが見つかりません"
  exit 1
fi

UNICODE_LISENCE=$(get_env_var "$env_file" "UNICODE_LISENCE")


env_vars=(
  "UNICODE_LISENCE=$UNICODE_LISENCE"
)


#gcloud arguments
app_name="go-http-function"
region="asia-northeast1"
function_name="LinbotCallback"
go_version="go123"
env_var_string=""
for var in "${env_vars[@]}"; do
  env_var_string+="$var,"
done


gcloud beta run deploy "$app_name" \
  --source . \
  --region "$region" \
  --function "$function_name" \
  --base-image "$go_version" \
  --allow-unauthenticated \
  --set-env-vars "$env_var_string" \