# Next.js 14 E-commerce App

This repository contains a Next.js 14 application that serves as a frontend for an e-commerce platform. The app utilizes GraphQL for queries and Apollo Client. It is deployed on Vercel and fetches data from the default Saleor storefront.

## Project Structure

- **Product Listing Page**: Displays a list of products with basic information like name, price, and thumbnail.
- **Product Details Page**: Displays detailed information about a single product, including a larger image, description, and additional specifications.


## Features

- Contains Product Listing Page and Product Details Page
- Go to Product list Page via Explore Product Button and Go to Product Details Page on click on product card.
- Fetches and displays e-commerce products using GraphQL.
- Utilizes Apollo Client for efficient data fetching and state management.
- Deployed on Vercel for easy access and scalability.

## Technologies Used

- **Next.js 14**: A React framework for building server-side rendered applications.
- **Apollo Client**: A powerful GraphQL client for managing data & GraphQL queries..
- **GraphQL**: A query language for APIs.
- **Tailwind CSS** (v3.4.1): For utility-first CSS styling.
- **TypeScript** (v5): For static typing in JavaScript.
- **Vercel**: A platform for frontend frameworks and static sites.

## Getting Started Locally

Follow these steps to set up and run the project locally:

```bash
Step 1: Clone the Repository
git clone https://github.com/RushikeshKasture/ecommerce-app.git
cd your-repo-name

Step 2: Install Dependencies
npm install

Step 3: Set Up Environment Variables
Create a .env.local file in the root of your project and add the following environment variables:
NEXT_PUBLIC_GRAPHQL_API=https://cloud.saleor.io/graphql/

Step 4: Run the Development Server
npm run dev
The app will run on http://localhost:3000.

Step 5: Open Your Browser
Navigate to http://localhost:3000 in your browser to see the application running.
```
