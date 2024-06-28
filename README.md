# Concourse Challenge Backend

## Project Overview

This backend project serves as the server-side component for the Concourse Challenge frontend. It integrates directly with OpenAI to pass user input from the frontend to the GPT-4 model and return the generated text back to the frontend in real-time by streaming the response.

## Tech Stack

- ⚡ [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- 🤖 [OpenAI](https://platform.openai.com/): API for advanced models like GPT for natural language processing.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (version 20 or above)
- pnpm (preferred), npm or yarn

### Set up

1. Clone the repository

```bash
git clone https://github.com/llapenna/concourse-challenge-backend.git
cd concourse-challenge-backend
```

2. Install dependencies

```bash
pnpm install
```

### Running the app

``` bash
pnpm dev
```

You can now make requests to the backend at `http://localhost:4000`.

## Project Architecture

- `src/index.ts`: Application entrypoint.
- `src/services`: OpenAI instance and fetching method.
- `src/types`: TypeScript types used across the application.
- `src/utils`: utility functions and config file.
