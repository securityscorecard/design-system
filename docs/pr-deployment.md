# PR-Based Deployment Workflow

This document explains the PR-based deployment workflow that automatically builds and publishes snapshot versions of the design system for internal testing.

## Overview

The PR-based deployment workflow enables teams to test design system changes in their applications without waiting for a full release. This reduces the need for frequent merges to main and eliminates the risk of having to revert changes.

## How It Works

### 1. Trigger Conditions

The workflow is triggered on the following PR events:
- `opened` - When a new PR is created
- `synchronize` - When new commits are pushed to the PR
- `reopened` - When a closed PR is reopened

### 2. Workflow Jobs

The workflow consists of several jobs that run in parallel:

#### Validation Jobs
- **Unit Tests** (`unit-tests`): Runs `yarn test` to ensure all unit tests pass
- **Type Checking** (`types`): Runs `yarn types` to verify TypeScript compilation
- **Linting** (`lint`): Runs `yarn lint` to check code quality
- **CSS Linting** (`lint-css`): Runs CSS and CSS-in-JS linting

#### Build and Deploy Job
- **Build and Publish Snapshot** (`build-and-publish-snapshot`): 
  - Runs after all validation jobs pass
  - Generates a unique snapshot version
  - Builds the package
  - Publishes to npm with a PR-specific tag

#### Cleanup Job
- **Cleanup on PR Close** (`cleanup-on-pr-close`):
  - Runs when a PR is closed or merged
  - Unpublishes the snapshot version from npm

### 3. Versioning Strategy

The snapshot version follows the pattern:
```
<base-version>-snapshot-<commit-sha>
```

For example:
- Base version: `0.0.0`
- Commit SHA: `abc12345`
- Snapshot version: `0.0.0-snapshot-abc12345`

### 4. NPM Publishing

The package is published with:
- **Version**: The generated snapshot version
- **Tag**: `pr-<PR-number>` (e.g., `pr-123`)
- **Registry**: The existing npm registry (`https://registry.npmjs.org`)

## Usage

### Installing a Snapshot Version

To test a snapshot version in your project:

```bash
# Install the snapshot version for PR #123
yarn add @securityscorecard/design-system@pr-123

# Or using npm
npm install @securityscorecard/design-system@pr-123
```

### Finding Available Versions

You can see all available versions and tags:

```bash
# List all versions
npm view @securityscorecard/design-system versions

# List all tags
npm dist-tag ls @securityscorecard/design-system
```

### Updating to Latest Snapshot

If the PR is updated with new commits, you can update to the latest snapshot:

```bash
# Update to the latest snapshot for PR #123
yarn add @securityscorecard/design-system@pr-123
```

## Benefits

1. **No Reverts**: Test changes without merging to main
2. **Reduced Merge Frequency**: Only merge when fully verified
3. **Easy Integration**: Simple npm install command for testing
4. **Automatic Cleanup**: No manual cleanup required
5. **Parallel Testing**: Multiple teams can test different PRs simultaneously

## Security Considerations

- Snapshot versions are automatically unpublished when PRs are closed
- Only PRs from the same repository can trigger the workflow
- NPM tokens are stored as GitHub secrets
- The workflow uses the same npm registry as production releases

## Troubleshooting

### Workflow Not Triggering

1. Ensure the PR is created against the main branch
2. Check that the workflow file is in the correct location (`.github/workflows/pr-build-deploy.yml`)
3. Verify that the PR event types are correctly configured

### Build Failures

1. Check the GitHub Actions logs for specific error messages
2. Ensure all tests pass locally before creating a PR
3. Verify that the package.json version is valid

### Publishing Issues

1. Check that the NPM_TOKEN secret is configured in GitHub
2. Verify that the package name and scope are correct
3. Ensure the npm registry is accessible

### Installation Issues

1. Verify the PR number is correct
2. Check that the snapshot version was successfully published
3. Clear npm cache if needed: `npm cache clean --force`

## Configuration

The workflow uses the following environment variables and secrets:

- `NPM_TOKEN`: NPM authentication token (GitHub secret)
- `GITHUB_TOKEN`: GitHub authentication token (automatically provided)

## Monitoring

You can monitor the workflow execution in:
1. **GitHub Actions tab**: View workflow runs and logs
2. **PR comments**: Automatic comments with installation instructions
3. **NPM registry**: Check published versions and tags

## Local Testing

You can test the workflow logic locally before creating a PR:

### Using the Test Script

```bash
# Run the workflow validation script
yarn test:workflow

# Or directly with node
node scripts/test-workflow.js
```

This script validates:
- Package.json configuration
- Git integration and SHA generation
- Build process and output files
- Workflow YAML structure
- NPM registry configuration
- Version generation logic

### Manual Testing

You can also test individual workflow steps manually:

```bash
# Test build process
yarn build

# Test validation steps
yarn test
yarn types
yarn lint
yarn lint:css
yarn lint:css-jsx

# Test version generation
node -p "require('./package.json').version"
git rev-parse --short HEAD
```

### Using Act (Advanced)

For more comprehensive testing, you can use `act` to run GitHub Actions locally:

```bash
# Install act
brew install act

# List available workflows
act --list

# Run a specific job (requires Docker)
act pull_request -W .github/workflows/pr-build-deploy.yml -j unit-tests
```

**Note**: Act requires Docker and may have limitations with certain actions or dependencies.

## Future Enhancements

Potential improvements to consider:
- Add visual regression testing to the workflow
- Include accessibility testing
- Add performance benchmarking
- Implement automatic dependency updates
- Add integration testing with consuming applications 