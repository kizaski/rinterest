


# copy api
# pip install requirements
# cd pinapi
# python manage.py runserver

# copy frontend
# npm install
# npm build
# FROM nginx
# COPY /path/to/dist /var/share/nginx/html
# https://www.reddit.com/r/docker/comments/99wsmt/simplest_way_to_serve_a_static_website/



FROM node:18.13.0-alpine AS builder

WORKDIR /app

COPY ./frontend/package*.json .

RUN npm install

COPY ./frontend .

ARG VITE_BASE_URL

RUN echo "VITE_BASE_URL:${VITE_BASE_URL}"

RUN echo "VITE_BASE_URL${VITE_BASE_URL}" >> .env

RUN npm run build

FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

