FROM node:20-slim

# Install OpenSSL and build dependencies (required for Prisma and sharp)
RUN apt-get update -y && apt-get install -y \
    openssl \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Generate Prisma Client
RUN pnpm prisma generate

# Expose port (default koa port is 8000)
EXPOSE 8000

# Start development server
CMD ["pnpm", "dev"]
