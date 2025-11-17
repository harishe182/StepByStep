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
def student_exists(name):
    """ Check if JSON file with student name already exists in data directory. 
        Used before loading student data or creating new student. """
    return

def save_student(student_data, name):
    """ Update existing student file with new student data. 
        Used after modifying student data (answer question, end of quiz etc.) """
    return

def load_student(name):
    """ Retrieve student info from JSON file.
        Used when student data needs to be accessed. """
    return

def create_new_student_file(name, email):
    """ Create new student profile locally. 
        Used when new student registers. """
    new_student = {
        "New_Student": {
        "name": name,
        "email": email,
        "mastery": {
            "Algebra Basics":{
                "Overall Unit 1": 0.0,
                "Section 1.1": 0.0,
                "Section 1.2": 0.0,
                "Section 1.3": 0.0
            } ,
            "Quadratic Equations":{
                "Overall Unit 2": 0.0,
                "Section 2.1": 0.0,
                "Section 2.2": 0.0,
                "Section 2.3": 0.0
            } ,
            "Geometry": {
                "Overall Unit 3": 0.0,
                "Section 3.1": 0.0,
                "Section 3.2": 0.0,
                "Section 3.3": 0.0
            },
            "Exponentials and Radicals": {
                "Overall Unit 4": 0.0,
                "Section 4.1": 0.0,
                "Section 4.2": 0.0,
                "Section 4.3": 0.0
            }
        },
        "metrics": {
            "total_questions_answered": 0,
            "correct_answers": 0,
            "incorrect_answers": 0,
            "average_time_per_question": 0
        },
        "badges": [],
        "question_history": [],
        "quiz_history":[],
        "current_session": {
            "question_id": None,
            "hints_used": 0,
            "start_time": None
        }
        }
    }
    file_path = os.path.join(DATA_DIR, f"student_{name}.json")
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(new_student, f, indent=4)

def update_student_email(name, new_email):
    """ Update student email. 
        Used when changing email in settings. """
    return

def delete_student(name):
    """ Delete student JSON file.
        Used for testing. """
    return

def update_mastery(student, unit_name, section_name, new_score):
    """ Update students mastery for a given unit and section. 
        Used after student answers question, or for each question when quiz is graded. """
    return

def generate_question(student, unit_name, section_name):
    """ Generate question based on student information and topic.
        Used for practice mode, or when generating quiz. """
    return
    
def record_current_question(student):
    """ Records question student is currently answering.
        Used right before question is sent to user, stored 
        in current session information. """
    return
    
def grade_question(student, question_id, submitted_answer,):
    """ Compares sumitted answer with correct answer.
        Used after student submits questions, returns correctness and feedback, and
        updates student mastery, question history, and student metrics.
        Takes note of response time and saves results for student metrics and question generation. """
    return

def generate_quiz(student, unit_name, section_name):
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