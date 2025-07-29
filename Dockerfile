# Use official Node 24 LTS image for build stage
FROM node:24.4.1 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install -g @angular/cli && npm install

# Copy the rest of the app and build it
COPY . .
RUN ng build --configuration production

# --- Serve built app with a lightweight server ---
FROM nginx:stable-alpine

# Copy build output from previous stage to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace nginx default config (for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default port
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]