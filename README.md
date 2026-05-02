# Multi-Category Catalog

A responsive, dynamic web application built with React and Tailwind CSS that renders a product catalog from a provided JSON dataset.

## Features

- **Home Screen:** Categorizes and previews items dynamically from a JSON dataset.
- **Item Detail Page:** Dynamically renders specific item properties based on their category.
- **Responsive Design:** Fully mobile-friendly and responsive layout using Tailwind CSS.
- **Modern UI:** Uses Lucide React for crisp, modern icons and styling.
- **Client-Side Routing:** Fast, smooth navigation using React Router DOM.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js installed on your machine.

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd -Multi_Category_Catalog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server address (usually `http://localhost:5173`).

## Project Structure

- `src/components/`: Reusable React components (e.g., `ItemCard.jsx`).
- `src/pages/`: Main application pages (`Home.jsx`, `ItemDetail.jsx`).
- `src/data.json`: The JSON dataset containing the categorized product data.
- `src/App.jsx`: Main application component setting up routing.
- `src/index.css`: Global styles and Tailwind CSS configuration.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Run ESLint to catch potential issues.

