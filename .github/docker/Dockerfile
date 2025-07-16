# Custom Docker image for GitHub Actions with Node.js and yarn
FROM node:22.4.1-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Update yarn to latest version
RUN npm install -g yarn@latest --force

# Set yarn version to match project requirements
RUN yarn set version stable

# Create a non-root user
RUN useradd -m -s /bin/bash github
USER github

# Set working directory
WORKDIR /workspace

# Default command
CMD ["/bin/bash"] 