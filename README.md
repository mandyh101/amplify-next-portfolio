# AWS Amplify Next.js todo app
View the app and create your own todo list: https://main.d3vhrbkq2eoqgb.amplifyapp.com/

## Overview

This repository started with a base starter template for creating applications using Next.js (App Router) and AWS Amplify. I am using this project as a hands-on way to understand how to deploy using AWS amplify, and learn the set up required for API and database management. 
The template comes pre-configured AWS services like Cognito, AppSync, and DynamoDB:

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Start up local environment
`npm install` (First time only)
`npm run dev` to start local env

## Building
- always create a new branch to test new features (any pushes to main will automatically deploy)
- create a PR to merge to main

## Deployment
This app is hosted on AWS amplify. Changes pushed to main are automatically deployed! 
- merge feature branch to main to deploy to the live app
- view the app to check your changes :https://main.d3vhrbkq2eoqgb.amplifyapp.com/


# Generic read me info for AWS amplify
## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
