# Grants Dashboard - Vee Home Assignment

The Grants Dashboard is a web application that allows users to view, manage, and interact with grant opportunities. It consists of a backend server providing a GraphQL API and a frontend built with React for user interaction.

## Table of Contents

- [Grants Dashboard - Vee Home Assignment](#grants-dashboard---vee-home-assignment)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Clone the Repository](#clone-the-repository)
  - [Backend Setup](#backend-setup)
    - [Environment Variables](#environment-variables)
    - [Running with Docker](#running-with-docker)
    - [GraphQL API](#graphql-api)
  - [Frontend Setup](#frontend-setup)
    - [Running Locally](#running-locally)
    - [**Login Instructions:**](#login-instructions)
  - [GraphQL API](#graphql-api-1)
    - [Key Queries and Mutations](#key-queries-and-mutations)
    - [Example Queries](#example-queries)
      - [Query Grants by Status](#query-grants-by-status)
  - [Database Schema](#database-schema)
    - [MongoDB Collections](#mongodb-collections)
  - [Backend Testing](#backend-testing)

## Technologies

- **Backend**: Node.js, Express, GraphQL, Mongoose (MongoDB ODM), Docker
- **Frontend**: React, Apollo Client, Material-UI
- **Database**: MongoDB (running on Docker)

## Architecture

- **Backend**: Provides a GraphQL API for managing users, grants, and user-grant relationships. It uses MongoDB for data persistence and is containerized using Docker.
- **Frontend**: A React-based UI that communicates with the backend API to display grant opportunities and manage user interactions.

## Features

- GraphQL API for querying and mutating data
- User authentication using usernames
- Responsive user interface with Material-UI
- Dockerized backend and MongoDB for easy deployment
- Automated script for populating MongoDB with fake data

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/get-started)

## Getting Started

### Clone the Repository

Clone the repository containing both the backend and frontend code:

```bash
git clone https://github.com/NavitB/vee-home-assignment.git
cd vee-home-assignment
```

The repository contains two main folders: `backend` and `frontend`.

## Backend Setup

### Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```plaintext
PORT=4000
MONGO_URI=mongodb://root:example@mongodb:27017/grantsDashboard?authSource=admin
```

### Running with Docker

1. **Ensure Docker is installed and running**.

2. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

3. **Build and run the Docker containers**:

   ```bash
   docker-compose up --build
   ```

   This command will set up and run the MongoDB and backend services. The backend server will be accessible at `http://localhost:4000/graphql`.

4. **Populating Fake Data**: A script runs automatically within the Docker setup to populate the database with fake data. This includes creating sample user, grants, and user-grant relationships, making it easier to test and demonstrate the application.

### GraphQL API

- **Endpoint**: The GraphQL API is accessible at `http://localhost:4000/graphql`.
- **Features**: The API supports queries and mutations for users, grants, and user-grant relationships.

## Frontend Setup

### Running Locally

1. **Ensure Node.js is installed**.
2. **Open a new terminal**
3. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

4. **Install the dependencies**:

   ```bash
   npm install
   ```

5. **Start the React application**:

   ```bash
   npm start
   ```

   The frontend application will open in your default web browser and be accessible at `http://localhost:3000`.

  ### **Login Instructions:**
   To access the dashboard, enter the username `testuser` on the login page. This is a pre-populated user created by the fake data script.

## GraphQL API

### Key Queries and Mutations

- **Login Mutation**: Authenticate users by username.
- **Query Grants by Status**: Fetch grants based on user interactions (e.g., new, liked, disliked).
- **Change Grant Status Mutation**: Update the status and feedback of user-grant relationships.

### Example Queries

#### Query Grants by Status

```graphql
query {
  grantsByStatus(userId: "USER_ID", status: NEW) {
    grant {
      id
      name
      foundation
      location
      amount
      deadline
      area
      logo
    }
    status
    matchDate
  }
}
```

## Database Schema

### MongoDB Collections

- **Users**: Stores user information.
- **Grants**: Stores details about grant opportunities.
- **UserGrants**: Stores relationships between users and grants, including status and feedback.

## Backend Testing

- **Run Tests**:

```bash
cd backend
npm install
npm test
```

---
