# Build stage - Build React frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code (excluding api folder)
COPY . .

# Build the React application
RUN npm run build

# Production stage - Python FastAPI + Static files
FROM python:3.11-slim

WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy FastAPI backend
COPY api/ ./api/

# Copy built React frontend from builder
COPY --from=builder /app/dist ./static

# Expose port 8080 (Fly.io default)
EXPOSE 8080

# Start FastAPI server (it will serve both API and static files)
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8080"]
