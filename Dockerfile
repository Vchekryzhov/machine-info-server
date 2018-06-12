# ---- Базовый Node ----
FROM node:carbon AS base
# Создать директорию app
WORKDIR /app
# ---- Зависимости ----
FROM base AS dependencies
COPY package*.json ./
RUN npm install
# ---- Скопировать файлы/билд ----
FROM dependencies AS build
WORKDIR /app
COPY src /app/src
COPY .babelrc /app
RUN npm run build
# --- Выпуск, используя Alpine ----
FROM node:8.9-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./
CMD ["npm", "run", "serve"]
