# Custom Docker Image for GitHub Actions

This directory contains the custom Docker image used by our GitHub Actions workflows to ensure consistent Node.js and yarn versions across all CI/CD pipelines.

## Image Details

- **Base Image**: `node:22.4.1-slim`
- **Package Manager**: Yarn (latest stable)
- **Registry**: GitHub Container Registry (ghcr.io)
- **Image Name**: `ghcr.io/securityscorecard/design-system/node-yarn`

## Features

- ✅ Node.js 22.4.1 pre-installed
- ✅ Yarn package manager pre-installed
- ✅ Git and curl for version control and HTTP requests
- ✅ Non-root user for security
- ✅ Optimized for GitHub Actions container jobs

## Usage

The image is automatically used in all GitHub Actions workflows that need Node.js and yarn:

```yaml
jobs:
  my-job:
    runs-on: ubuntu-latest
    container:
      image: ghcr.io/${{ github.repository }}/node-yarn:latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Install dependencies
        run: yarn install --immutable
      
      - name: Run tests
        run: yarn test
```

## Building Locally

To test the Docker image locally:

```bash
# Build the image
docker build -t node-yarn-test ./.github/docker

# Test with the project
./scripts/test-docker-image.sh
```

## Publishing

The image is automatically built and published to GitHub Container Registry when:

1. Changes are pushed to the `.github/docker/` directory
2. The workflow is manually triggered
3. Changes are pushed to `main` or `develop` branches

## Benefits

- **Consistency**: Same Node.js and yarn versions across all environments
- **Speed**: No need to install Node.js and yarn in each job
- **Reliability**: Pre-tested image reduces CI failures
- **Security**: Non-root user and minimal attack surface
- **Caching**: Docker layer caching for faster builds

## Troubleshooting

If you encounter issues with the Docker image:

1. Check the image build logs in the "Build and Publish Docker Image" workflow
2. Test locally using `yarn test:docker`
3. Verify the image exists in GitHub Container Registry
4. Check that the workflow is using the correct image tag 