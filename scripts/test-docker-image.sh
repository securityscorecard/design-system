#!/bin/bash

# Test script for the custom Docker image
set -e

echo "🐳 Testing custom Docker image..."

# Build the image locally
echo "📦 Building Docker image..."
docker build -t node-yarn-test ./.github/docker

# Test the image with a simple Node.js and yarn check
echo "🧪 Testing Node.js and yarn installation..."
docker run --rm node-yarn-test bash -c "
  echo 'Node.js version:'
  node --version
  echo 'Yarn version:'
  yarn --version
  echo 'NPM version:'
  npm --version
"

# Test with the actual project
echo "🧪 Testing with project files..."
docker run --rm -v "$(pwd):/workspace" -w /workspace node-yarn-test bash -c "
  echo 'Installing dependencies...'
  yarn install --immutable
  echo 'Running tests...'
  yarn test --passWithNoTests
  echo 'Checking types...'
  yarn types
  echo 'Running lint...'
  yarn lint
"

echo "✅ Docker image test completed successfully!" 