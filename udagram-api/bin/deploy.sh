# Deploy
eb init $APP_NAME                   \
    --region=$AWS_DEFAULT_REGION    \
    --platform=$PLATFORM            \

eb use prod-env

eb setenv NODE_ENV=$NODE_ENV        \
          PORT=$PORT                \
          DB_USER=$DB_USER          \
          DB_PASS=$DB_PASS          \
          DB_HOST=$DB_HOST          \
          DB_PORT=$DB_PORT          \
          DB_NAME=$DB_NAME          \
          JWT_SECRET=$JWT_SECRET    \
          WEB_URL=$WEB_URL          \
          API_URL=$API_URL

eb deploy --label $APP_LABEL