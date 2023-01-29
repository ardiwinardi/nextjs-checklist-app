# dev.Dockerfile for development

FROM node:16-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

CMD npm run dev
