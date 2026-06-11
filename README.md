# ResumeBoost AI - Elevate Your Career with AI

ResumeBoost AI is a powerful, AI-driven SaaS platform designed to help job seekers transform their resumes from "good" to "outstanding." Our platform leverages advanced language models to provide intelligent feedback, dynamic rewrites, and strategic optimizations that help candidates pass Applicant Tracking Systems (ATS) and catch the eye of top recruiters.

## 🚀 Key Features

- **AI-Powered Resume Improvement**: Paste your resume text and receive a professionally rewritten version that highlights your impact and achievements.
- **Smart Bullet Point Enhancement**: Automatically transforms weak bullet points into strong, action-oriented statements using the STAR method (Situation, Task, Action, Result).
- **Job Description Optimization**: Refines your work experience descriptions to align with industry standards and key competencies.
- **Real-time Resume Scoring**: Get an instant score (0-100) for your resume based on content quality, formatting, and impact.
- **Actionable Suggestions**: Receive specific, itemized advice on how to further improve each section of your resume.
- **Interactive Dashboard**: A simple and intuitive interface to manage your resume enhancements and track your progress.
- **Copy-to-Clipboard**: Easily export your improved resume text with a single click.

## 📸 Screenshots

### Landing Page
![Landing Page Placeholder](https://via.placeholder.com/800x450?text=ResumeBoost+AI+Landing+Page)
*Our professional landing page explaining the core value proposition.*

### Resume Improver Tool
![Improver Interface Placeholder](https://via.placeholder.com/800x450?text=ResumeBoost+AI+Improver+Interface)
*The interactive workspace where users can input and improve their resumes.*

## 🛠️ Tech Stack

### Frontend
- **React.js**: Modern component-based UI.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Lucide React**: Beautifully simple icons.
- **Axios**: Promise-based HTTP client for API requests.

### Backend
- **Node.js**: Scalable JavaScript runtime.
- **Express**: Fast, unopinionated, minimalist web framework.
- **Dotenv**: Zero-dependency module that loads environment variables.
- **CORS**: Middleware for cross-origin resource sharing.
- **Morgan**: HTTP request logger for development.

## 📂 Project Structure

```
resumeboost-ai/
├── frontend/          # React frontend application
├── backend/           # Node.js Express API server
├── design/            # Brand assets and design documentation
├── README.md          # Project root documentation
└── .gitignore         # Root git ignore configuration
```

## ⚙️ Local Development Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/beutyblendluxeessentials-glitch/-AI-Resume-Improver.git
   cd resumeboost-ai
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

## 🔐 Environment Variables

### Backend (`/backend/.env`)
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
# Add your OpenAI API key to enable live AI features
OPENAI_API_KEY=your_openai_api_key_here
```

### Frontend (`/frontend/.env`)
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Running the App

1. **Start the API Server**:
   ```bash
   cd backend
   npm start
   ```
   The backend will be running at `http://localhost:5000`.

2. **Start the Development Server**:
   ```bash
   cd ../frontend
   npm run dev
   ```
   The frontend will be accessible at `http://localhost:5173`.

## 🚢 Deployment Instructions

### Backend Deployment
1. Set the production environment variables on your host (e.g., Heroku, Render, AWS).
2. Ensure the `PORT` is correctly assigned by the host.
3. Run `npm start` to launch the server.

### Frontend Deployment
1. Generate the production build:
   ```bash
   cd frontend
   npm run build
   ```
2. The production-ready files will be in the `frontend/dist` directory.
3. Deploy the contents of `dist` to any static hosting provider (Vercel, Netlify, AWS S3, etc.).

---
Built with ❤️ by the ResumeBoost AI Team.
