import json
import os
import random
import time
from datetime import datetime
from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

DATA_DIR = 'data'
DOMAIN_FILE = os.path.join(DATA_DIR, 'domain.json')

# --- Helper functions for API endpoints ---
def student_exists(name: str) -> bool:
    """ Check if JSON file with student name already exists in data directory. 
        Used before loading student data or creating new student. """
    file_path = os.path.join(DATA_DIR, f"student_{name}.json")
    if os.path.exists(file_path):
        return True
    return False

def save_student(student_data: dict, name: str) -> bool:
    """ Update existing student file with new student data. 
        Used after modifying student data (answer question, end of quiz etc.) """
    file_path = os.path.join(DATA_DIR, f"student_{name}.json")
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(student_data, f, indent=4)
    return True

def load_student(name: str) -> dict:
    """ Retrieve student info from JSON file.
        Used when student data needs to be accessed. """
    file_path = os.path.join(DATA_DIR, f"student_{name}.json")
    return json.load(file_path)

def create_new_student_file(name: str, email: str) -> bool:
    """ Create new student profile locally. 
        Used when new student registers. """
    if student_exists(name):
        return False
    new_student = {
        "name": name,
        "email": email,
        "mastery": {
        "algebra_basics": {
            "sections": {
                "1": 0.0,
                "2": 0.0,
                "3": 0.0
            }
        },
        "quadratic_equations": {
            "sections": {
                "1": 0.0,
                "2": 0.0,
                "3": 0.0
            }
        },
        "geometry": {
            "sections": {
                "1": 0.0,
                "2": 0.0,
                "3": 0.0
            }
        },
        "exponentials_radicals": {
            "sections": {
                "1": 0.0,
                "2": 0.0,
                "3": 0.0
            }
        }
    },
    "metrics": {
        "total_questions_answered": 0,
        "correct_answers": 0,
        "incorrect_answers": 0,
        "average_time_per_question_ms": 0
    },
    "badges": [],
    "question_history": [],
    "quiz_history": [],
    "current_session": {
        "question_id": None,
        "hints_used": 0,
        "start_time": None
    }
    }
    file_path = os.path.join(DATA_DIR, f"student_{name}.json")
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(new_student, f, indent=4)
    return True

def update_student_email(name: str, new_email: str) -> bool:
    """ Update student email. 
        Used when changing email in settings. """
    student = load_student(name)
    student["email"] = new_email
    save_student(student, name)
    return True

def delete_student(name: str) -> bool:
    """ Delete student JSON file.
        Used for testing. """
    file_path = os.path.join(DATA_DIR, f"student_{name}.json")
    os.remove(file_path)
    return True

def update_mastery(student: dict, unit_name: str, section: str, new_score: int) -> bool:
    """ Update students mastery for a given unit and section. 
        Used after student answers question, or for each question when quiz is graded. """
    updated_student = student
    updated_student["mastery"][unit_name]["sections"][section] = new_score
    save_student(updated_student, student["name"])
    return True

def calculate_overall_unit_mastery(student: dict, unit_name: str) -> int:
    """ Recalculates overall unit mastery. 
        Used when student does a quiz or practice for a specific section. """
    overall_mastery = 0
    unit_sections = student["mastery"][unit_name]["sections"]
    for section_mastery in unit_sections.values():
        overall_mastery += section_mastery
    return overall_mastery / unit_sections.length()

def generate_question(student, unit_name, section):
    """ Generate question based on student information and topic.
        Used for practice mode, or when generating quiz. """
    return
    
def record_current_question(student):
    """ Records question student is currently answering.
        Used right before question is sent to user, stored 
        in current session information. """
    return
    
def grade_question(student, question_id, submitted_answer):
    """ Compares sumitted answer with correct answer.
        Used after student submits questions, returns correctness and feedback, and
        updates student mastery, question history, and student metrics.
        Takes note of response time and saves results for student metrics and question generation. """
    return

def start_practice_session(student: dict, unit_name: str, section: str) -> bool:
    """ Begins a practice session by generating a question, and 
        initializes current session details in file. 
        Used when student starts a practice session for a unit/section. """
    return

def end_practice_session(student):
    """ Ends practice session, removes current session details from
        student file, records time of session and recalculates overall mastery. 
        Used when student exits a practice session. """
    return

def generate_quiz(student, unit_name, section):
    """ Generates quiz object based on student information and topic. 
        Used when student attemps to start a quiz, stores in quiz history. """
    return

# --- API endpoints --- 
@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/get_student_data/<string:name>', methods=['GET'])
def get_student_data(name):
    return

@app.route('/get_question', methods=['GET'])
def get_question():
    return

@app.route('/answer_question', methods=['POST'])
def answer_question():
    return

@app.route('/generate_quiz', methods=['GET'])
def generate_quiz():
    return


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)