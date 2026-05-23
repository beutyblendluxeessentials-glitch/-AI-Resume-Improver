# ResumeBoost AI - Backend API

## Base URL
`http://localhost:5000/api`

## Endpoints

### 1. Health Check
- **URL:** `/health`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "status": "ok",
    "message": "ResumeBoost AI API is running"
  }
  ```

### 2. Improve Resume
- **URL:** `/resume/improve`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "resumeText": "string"
  }
  ```
- **Response:**
  ```json
  {
    "improvedResume": "string",
    "strongerBulletPoints": ["string", ...],
    "betterJobDescriptions": ["string", ...],
    "score": number (0-100),
    "suggestions": ["string", ...]
  }
  ```

## Development
To start the server in development mode:
```bash
npm run dev
```

The server binds to `0.0.0.0:5000`.
