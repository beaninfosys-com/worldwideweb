#!/bin/bash

# S3 bucket name - hardcoded as requested
S3_BUCKET_NAME="beaninfosys.com"

# AWS profile to use (change this if you have a different profile name)
AWS_PROFILE="beaninfosys_com"

# Set the AWS profile
export AWS_PROFILE="$AWS_PROFILE"

echo "Setting up AWS profile: $AWS_PROFILE"

# Login to AWS (using SSO if configured, or skip if using access keys)
echo "Logging in to AWS..."
aws sso login --profile "$AWS_PROFILE" 2>/dev/null || echo "SSO login not available or already logged in. Continuing..."

# Verify AWS credentials
echo "Verifying AWS credentials..."
if ! aws sts get-caller-identity --profile "$AWS_PROFILE" >/dev/null 2>&1; then
    echo "Error: AWS credentials are not valid. Please configure your AWS credentials first."
    exit 1
fi

echo "AWS credentials verified successfully."

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "Error: 'dist' directory not found in current directory."
    exit 1
fi

echo "Starting sync of 'dist' directory to S3 bucket: s3://$S3_BUCKET_NAME"

# Debug: List contents of dist directory
echo "Contents of dist directory:"
ls -la dist/

# Sync the dist directory to S3 bucket
echo "Running AWS S3 sync..."
aws s3 sync dist/ "s3://$S3_BUCKET_NAME" \
    --profile "$AWS_PROFILE" \
    --exact-timestamps \
    --cache-control "max-age=31536000, public"

if [ $? -eq 0 ]; then
    echo "Successfully synced dist directory to s3://$S3_BUCKET_NAME"

    # Check if about and index2 folders exist in S3
    echo "Checking if about and index2 folders were uploaded to S3..."
    aws s3 ls "s3://$S3_BUCKET_NAME/about/" --profile "$AWS_PROFILE" 2>/dev/null && echo "✓ about/ folder exists in S3" || echo "✗ about/ folder NOT found in S3"
    aws s3 ls "s3://$S3_BUCKET_NAME/index2/" --profile "$AWS_PROFILE" 2>/dev/null && echo "✓ index2/ folder exists in S3" || echo "✗ index2/ folder NOT found in S3"

    # Check specific files
    aws s3 ls "s3://$S3_BUCKET_NAME/index2/vite.svg" --profile "$AWS_PROFILE" 2>/dev/null && echo "✓ index2/vite.svg exists in S3" || echo "✗ index2/vite.svg NOT found in S3"
else
    echo "Error: Failed to sync files to S3 bucket."
    exit 1
fi

echo "Sync completed successfully!"
