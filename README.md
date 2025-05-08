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
|     /api/v1/gateway/backend/DC    |  GET   |      get DC details with id      |
|     /api/v1/gateway/backend/DC    |  PUT   |  Update DC with id,name,roomNum  |
|     /api/v1/gateway/backend/DC    |  POST  |       create DC with name        |
|     /api/v1/gateway/backend/DC    | DELETE |       delete DC with name        |
|    /api/v1/gateway/backend/allDC  |  GET   |      get visual information      |
|     /api/v1/gateway/backend/rooms |  POST  |create rooms with fname,num,array |
|     /api/v1/gateway/backend/room  |  PUT   | Update room with id,name,rackNum |
|     /api/v1/gateway/backend/room  | DELETE |      delete room with name,id    |
|     /api/v1/gateway/backend/room  |  GET   |  get room details with name,id   |