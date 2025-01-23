FROM node:18-slim

WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# 依存関係のインストール
COPY package.json ./
RUN npm install

# アプリケーションのコピー
COPY . .

# TypeScript のコンパイル
RUN npm run build

# 開発用コマンド
CMD ["npm", "run", "start:dev"]