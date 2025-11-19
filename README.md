BitByBit – Grade 9 Math Tutor

BitByBit is an intelligent tutoring system designed for Grade 9 math.
It provides a polished student learning experience along with a teacher analytics dashboard.
The project runs fully offline using seed demo data and includes a lightweight machine learning layer for personalized recommendations.

⸻

Running the Project Locally

This section contains the correct instructions that match exactly how the project actually runs.

⸻

Backend (Flask API)

1. Navigate to the backend folder
cd ~/Desktop/project-setup-bitbybit/src

2. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

3. Install backend dependencies
pip install flask flask-cors python-dotenv

4. Start the backend server
python -m backend.main

The backend runs at:
http://127.0.0.1:5000

No additional configuration needed.
No requirements.txt needed.
No environment variables required.

⸻

Frontend (Vite + React)

1. Navigate to the frontend folder
cd ~/Desktop/project-setup-bitbybit/src/frontend

2. Install Node dependencies
npm install

3. Start the Vite dev server
npm run dev

The frontend runs at:
http://localhost:5173

It automatically connects to the Flask backend at port 5000.

⸻

Demo Accounts

The system uses pre-seeded demo logins.
No user creation is required.

Student
student@example.com
password: password123

Teacher
teacher@example.com
password: password123

After logging in:
	•	Students start at /
	•	Teachers start at /teacher

⸻

Main Features

Student Experience
	•	Home dashboard with:
	•	Full-body avatar
	•	ML-powered next recommended activity
	•	Recent attempts
	•	Overall mastery summary
	•	Units:
	•	Unit list + section list
	•	Diagnostic quiz
	•	Section-based mini quizzes
	•	Practice quizzes
	•	Full unit test
	•	Review and results pages with personalized feedback + difficulty insights
	•	History (charts, attempts list, scores)
	•	Profile:
	•	Ready Player Me avatar integration
	•	Custom avatar URL support
	•	Full avatar preview

⸻

Teacher Dashboard
	•	Class overview with:
	•	Student mastery levels
	•	Hint usage
	•	Difficult units
	•	Detailed student drawer
	•	Unit insights panel
	•	Attempts breakdown

⸻

Machine Learning Layer

(BitByBit includes lightweight ML logic using seed data.)
	•	Difficulty Estimation
Based on p(correct) with smoothing and optional response-time signals.
	•	Knowledge Tracing
Per-skill mastery tracking updated after every attempt.
	•	Next-Activity Recommendation
Picks the best next quiz/activity based on weak skills and difficulty targeting.
	•	Personalized Feedback
Short learning messages generated for diagnostics, practice, mini quizzes, and unit tests.
