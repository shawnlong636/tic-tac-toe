# Build
FROM node:19-alpine as build_stage
WORKDIR /app
COPY . .
RUN npm clean-install
RUN npm run build

# Deploy
FROM nginx:stable-alpine as prod_stage
COPY --from=build_stage app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]