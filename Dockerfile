FROM node:22-alpine

# Set Working Directory
WORKDIR ./

# Copy Package.json and lock files
COPY package.json package-lock.json ./

# Install depedencies
RUN npm install --frozen-lockfile

# Copy Rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]