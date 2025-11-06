# OSAFlow Lite Tutorial

This document provides a step-by-step guide to install, configure, and operate the OSAFlow Lite application.

## 1. Prerequisites

- Python 3.8+
- Node.js 16+
- Git

## 2. Installation

### Backend

```bash
git clone https://github.com/your-repo/osaflow-lite.git
cd osaflow-lite/backend
pip install -r requirements.txt
```

### Frontend

```bash
cd ../frontend
npm install
```

## 3. Configuration

### Backend

1.  Create a `.env` file in the `backend/` directory.
2.  Add the following environment variables:

    ```
    SECRET_KEY='your-strong-secret-key'
    DEBUG=True
    ```

### Frontend

1.  Create a `.env` file in the `frontend/` directory.
2.  Add the following environment variables:

    ```
    NEXT_PUBLIC_API_URL=http://localhost:8000
    ```

## 4. Running the Application

### Backend

```bash
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
