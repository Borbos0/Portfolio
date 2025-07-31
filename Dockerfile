# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies based on the package-lock.json
COPY package.json package-lock.json* ./
RUN npm ci --include=dev && npm cache clean --force

# Copy the rest of the application source code
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy necessary files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
CMD ["npm", "start"]
