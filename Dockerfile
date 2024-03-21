
FROM nginx:latest

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Copy built Vite app
COPY /frontend/dist /usr/share/nginx/html

EXPOSE 80


# FROM node:18.13.0-alpine AS builder
# WORKDIR /app/frontend
# COPY ./frontend/package*.json ./
# RUN npm install
# COPY ./frontend ./
# ARG VITE_BASE_URL
# RUN echo "VITE_BASE_URL:${VITE_BASE_URL}"
# RUN echo "VITE_BASE_URL${VITE_BASE_URL}" >> .env
# RUN npm run build

# FROM nginx:1.21.0-alpine
# COPY --from=builder /app/frontend/dist /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# CMD ["nginx", "-g", "daemon off;"]




# # copy api
# # pip install requirements
# # cd pinapi
# # python manage.py runserver

# FROM python:3-alpine

# WORKDIR /app/api

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# RUN pip install --upgrade pip
# COPY ./api ./
# RUN pip install -r ./requirements.txt

# ## gunicorn or smth
# ## nginx
# # FROM nginx:1.21.0-alpine
# # COPY ./api/nginx.conf /etc/nginx/conf.d/default.conf

# # CMD ["nginx", "-g", "daemon off;"]



