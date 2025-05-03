# Gateway Service

## Description

The Gateway Service is responsible for routing requests to the appropriate service and authenticating requests.

## Prerequisites

```bash
# Install dependencies
npm install

## Copy the .env.development file and rename it to .env
cp .env.development .env
```

## Scripts

- `npm start`: Start the service in production mode.
- `npm run dev`: Start the service in development mode.
- `npm run test`: Run the tests.
- `npm run lint`: Lint the code.
- `npm run format`: Format the code.

## Endpoints

|             Endpoint              | Method |           Description            |
|:---------------------------------:|:------:|:--------------------------------:|
|           /api/healthy            |  Get   | Check if the service is running. |
|    /api/v1/gateway/auth/signup    |  POST  |           Signup user            |
|   /api/v1/gateway/auth/signout    |  POST  |           Signout user           |
|    /api/v1/gateway/auth/signin    |  POST  |           Signin user            |
| /api/v1/gateway/auth/verify-email |  PUT   |        Verify user email         |