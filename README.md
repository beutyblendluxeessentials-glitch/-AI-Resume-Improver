# ResumeBoost AI

ResumeBoost AI is an AI-powered platform designed to help job seekers enhance their resumes by suggesting stronger bullet points, better job descriptions, and providing an overall resume score.

## Project Structure

This is a monorepo containing the following components:

- `/frontend`: React frontend built with Vite and Tailwind CSS.
- `/backend`: Node.js/Express API providing resume improvement logic and AI integrations.
- `/design`: Design assets and documentation.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resumeboost-ai
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

### Running the Application

To run the application locally, you need to start both the backend and frontend servers.

#### Start Backend
```bash
cd backend
npm start
```
The backend server will run on `http://localhost:5000`.

#### Start Frontend
```bash
cd frontend
npm run dev
```
The frontend application will be available at `http://localhost:5173`.

## Features

- **Resume Improvement**: AI-powered rewriting of resume text.
- **Bullet Point Enhancement**: Suggestions for more impactful and quantifiable bullet points.
- **Job Description Optimization**: Better descriptions for past roles.
- **Resume Scoring**: A 0-100 score based on best practices.
- **Professional Dashboard**: Manage and track resume improvements.

## Technology Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, Lucide React.
- **Backend**: Node.js, Express, CORS, Dotenv.
- **Design**: SVG icons, professional branding.

## License

ISC
