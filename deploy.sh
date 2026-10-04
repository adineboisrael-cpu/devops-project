#!/bin/bash

set -e

echo "Pulling latest Docker image..."
docker pull israeladinebo/devops-node-app:latest

echo "Stopping current application..."
docker-compose down

echo "Starting updated application..."
docker-compose up -d

echo "Deployment completed successfully!"
docker ps
