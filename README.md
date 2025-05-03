# Todo App

A simple task management app built with Vue 3, Nuxt, Drizzle, SQLite, Zod, and Pico.css.

## Features

* List all tasks
* Create new tasks
* View details of a task
* Delete tasks
* Input validation with Zod
* Server API powered by Nuxt's server routes
* Drizzle ORM for type-safe database interactions

## Tech Stack

* **Framework**: Nuxt 3 (Vue 3)
* **UI**: Pico.css
* **Database**: SQLite
* **ORM**: Drizzle
* **Validation**: Zod
* **Language**: TypeScript

## Getting Started

### Prerequisites

* Node.js v16+
* pnpm (or npm/yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/locturui/todo-app-nuxt.git
   cd todo-app-nuxt
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:
   Create a `.env` file in the project root with:

   ```ini
   DATABASE_URL="file:./dev.db"
   TOKEN="token-if-cloud-db"
   ```

4. Run Drizzle migrations (if any):

   ```bash
   pnpm drizzle-kit generate
   pnpm drizzle-kit push
   ```

5. Start the development server:

   ```bash
   pnpm dev
   ```

6. Open your browser at `http://localhost:3000`.

## Validation

Server and client inputs are validated using Zod schemas to ensure data integrity.

## Styling

This project uses Pico.css for a minimal, responsive design. Customize in `assets/css` or override components as needed.

## Database

* SQLite database file is stored locally (e.g., `dev.db`).
* Drizzle provides a typed schema in `lib/db/schema.ts`.

## Deployment

1. Build the app:

   ```bash
   pnpm build
   ```
2. Start in production mode:

   ```bash
   pnpm start
   ```
