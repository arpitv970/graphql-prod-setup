# Blog App - Backend

## Overview

This is the **Backend** for the **Blog App**, built using **GraphQL**, **Express**, and **TypeScript**. The backend is designed to be scalable and maintainable with a robust infrastructure, integrating **Apollo Server** for GraphQL, and following best practices for **DevOps** (To be added).

## Tech Stack

- **Apollo Server** for GraphQL APIs.
- **Express** for handling REST APIs and general server routing.
- **TypeScript** for static type-checking and enhanced developer experience.
- **Node.js v22+** with native support for ES Modules, `.env` files, and the `--watch` feature for fast development.
- **Jest** for unit and integration testing.
- **Supertest** for API testing.
- **tsx** for TypeScript execution in development.
- **ts-node** for runtime TypeScript support.
- **Apollo Client** (future integration) for interacting with GraphQL API.
- **CI/CD** (To be added) for automated deployments and tests.
- **DevOps** best practices (To be added) to ensure smooth deployment pipelines and environment management.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/blog-app-backend.git
cd blog-app-backend
```
### 2. Install dependencies
Install the required dependencies using npm:
```
npm i
```

### 3. Get `.env`
```
cp .env.example .env
```

### 4. Run the development server
```
npm run dev
```
This will start the server with TypeScript and native Node.js watch support (Node.js v22+), so the app will automatically reload on changes.

### 5. Build the project
```
npm run build
```

### 6. Start the production server
```
npm start
```

### 7. Running Tests
To run the tests using **Jest**:
```
npm test
```

### 8. Clean Build Files
To remove build artifacts (like the dist/ folder):
```
npm run clean
```

---

There is lot to do more, feel free to contribute on this project 🚀
