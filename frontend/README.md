# ResumeBoost AI - Frontend

The frontend for ResumeBoost AI is built with React, Vite, and Tailwind CSS. It provides a user-friendly interface for improving resumes using AI.

## Features

- **Landing Page**: Explains the value proposition and shows examples.
- **Resume Improver**: Paste your resume and get an AI-enhanced version instantly.
- **Scoring & Suggestions**: Real-time feedback on your resume quality.
- **Modular Components**: Clean, readable, and reusable code structure.
- **Dashboard**: Track your resume improvement progress.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **Axios** (API Requests)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd /home/team/shared/resumeboost-ai/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### API Integration

The frontend expects a backend server running at `http://localhost:3001` with the following endpoint:

- **POST** `/api/resume/improve`
- **Payload**: `{ "resumeText": "string" }`
- **Response**: 
  ```json
  {
    "improvedResume": "string",
    "strongerBulletPoints": ["string"],
    "betterJobDescriptions": ["string"],
    "score": number,
    "suggestions": ["string"]
  }
  ```

A mock fallback is implemented in the frontend for development when the backend is not available.
