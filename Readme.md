# quotes-api

A simple and robust API for fetching quotes, built with Node.js and Express.

---

## Table of Contents

*   [About The Project](#about-the-project)
*   [Features](#features)
*   [Deployment](#deployment)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running Locally](#running-locally)
*   [API Endpoints](#api-endpoints)
*   [Technologies Used](#technologies-used)
---

## About The Project

`quotes-api` is a straightforward RESTful API designed to provide a collection of quotes. It's built using Node.js and the Express.js framework, making it lightweight, performant, and easy to integrate into various applications. This API can serve as a backend for quote-displaying websites, mobile apps, or any service requiring quick access to inspirational or famous quotes.

The project emphasizes simplicity and ease of use, providing a clean interface to retrieve quote data.

## Features

*   **Retrieve All Quotes**: Fetch the entire collection of available quotes.
*   **Get Random Quote**: Easily fetch a single random quote.
*   **Fetch Quote by ID**: Access a specific quote using its unique identifier.
*   **CORS Enabled**: Seamless integration with front-end applications due to Cross-Origin Resource Sharing (CORS) being enabled.
*   **Lightweight & Fast**: Built with Node.js and Express for optimal performance.

## Deployment

The `quotes-api` is deployed and publicly accessible:

**Base URL**: `https://quotes-api-seven.vercel.app/`

You can test the API directly using this link in your browser or with tools like Postman/Insomnia.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your system.

*   **Node.js**:
    ```bash
    node -v
    ```
*   **npm**:
    ```bash
    npm -v
    ```
If not installed, you can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nitinkoberoii/quotes-api.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd quotes-api
    ```
3.  **Install NPM dependencies:**
    ```bash
    npm install
    ```

### Running Locally

After installation, you can start the development server:

```bash
npm start
```

The API will typically run on `http://localhost:3000` (or another port if `process.env.PORT` is set). You can then access the endpoints locally.

## API Endpoints

All endpoints are prefixed with `/api`.

### 1. Get All Quotes

*   **URL**: `/api/quotes`
*   **Method**: `GET`
*   **Description**: Retrieves an array of all available quotes.

**Example Request:**

```bash
GET https://quotes-api-seven.vercel.app/api/quotes
```

**Example Response (truncated):**

```json
[
  {
    "id": 1,
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "id": 2,
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston S. Churchill"
  },
  // ... more quotes
]
```

### 2. Get a Random Quote

*   **URL**: `/api/quotes/random`
*   **Method**: `GET`
*   **Description**: Retrieves a single random quote from the collection.

**Example Request:**

```bash
GET https://quotes-api-seven.vercel.app/api/quotes/random
```

**Example Response:**

```json
{
  "id": 42,
  "quote": "The best way to predict the future is to create it.",
  "author": "Peter Drucker"
}
```

### 3. Get Quote by ID

*   **URL**: `/api/quotes/:id`
*   **Method**: `GET`
*   **Description**: Retrieves a specific quote based on its unique ID. Replace `:id` with the desired quote ID.

**Example Request:**

```bash
GET https://quotes-api-seven.vercel.app/api/quotes/5
```

**Example Response:**

```json
{
  "id": 5,
  "quote": "Innovation distinguishes between a leader and a follower.",
  "author": "Steve Jobs"
}
```

**Error Response (Quote Not Found):**

```json
{
  "message": "Quote not found"
}
```
*Status: 404 Not Found*

## Technologies Used

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
*   **CORS**: Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
*   **Nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
