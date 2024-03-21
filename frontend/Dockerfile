FROM node:18.13.0-alpine AS builder
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
ARG VITE_BASE_URL
RUN echo "VITE_BASE_URL:${VITE_BASE_URL}"
RUN echo "VITE_BASE_URL${VITE_BASE_URL}" >> .env
RUN npm run build