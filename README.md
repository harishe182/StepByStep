# BitByBit – Grade 9 Math Tutor

BitByBit is an intelligent tutoring system designed for Grade 9 math.  
It provides a polished student learning experience along with a teacher analytics dashboard.  
The project runs fully offline using seed demo data and includes a lightweight machine learning layer for personalized recommendations.

---

## Running the Project Locally

Below are the correct run instructions that match the actual project structure.

---

## Backend (Flask API)

**1. Navigate to backend folder**
```bash
cd ~/Desktop/project-setup-bitbybit/src
```

**2. Create and activate virtual environment**
```bash
python3 -m venv .venv
source .venv/bin/activate
```

**3. Install backend dependencies**
```bash
pip install flask flask-cors python-dotenv
```

**4. Start backend server**
```bash
python -m backend.main
```

Backend runs at:
```
http://127.0.0.1:5000
```

No additional config needed.  
No requirements.txt needed.  
No environment variables required.

---

## Frontend (Vite + React)

**1. Navigate to frontend**
```bash
cd ~/Desktop/project-setup-bitbybit/src/frontend
```

**2. Install dependencies**
```bash
npm install
```

**3. Start Vite dev server**
```bash
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

It automatically connects to the Flask backend at port 5000.

---

## Demo Accounts

The system uses pre-seeded demo users.  
No signup or account creation required.

### Student
- email: `student@example.com`
- password: `password123`

### Teacher
- email: `teacher@example.com`
- password: `password123`

After logging in:
- Students start at `/`
- Teachers start at `/teacher`

---

## Main Features

### Student Experience
- Home dashboard with:
  - Full-body avatar
  - ML based next recommended activity
  - Recent attempts
  - Overall mastery summary
- Units:
  - Unit list and section list
  - Diagnostic quiz
  - Section mini quizzes
  - Practice quizzes
  - Full unit test
  - Results pages with personalized feedback and difficulty insights
- History page with charts, attempt logs, and scores
- Profile page with Ready Player Me avatar support

---

## Teacher Dashboard
- Class overview with:
  - Student mastery levels
  - Hint usage
  - Units needing attention
- Detailed student drawer
- Attempts breakdown panel

---
- Diagnostics
- Mini quizzes
- Practice
- Unit tests

---
