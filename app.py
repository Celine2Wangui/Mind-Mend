from flask import Flask, render_template
import random

app = Flask(__name__)

# --- Quotes for Home page ---
QUOTES = [
    "You are allowed to rest. 🌿",
    "Breathe. You’re doing better than you think.",
    "Progress, not perfection. ✨",
    "Healing isn’t linear — and that’s okay.",
    "Small steps still move you forward. 💫"
]

# --- ROUTES ---
@app.route('/')
def index():
    quote = random.choice(QUOTES)
    return render_template('index.html', quote=quote)

@app.route('/focus')
def focus():
    return render_template('focus.html')

@app.route('/mood')
def mood():
    return render_template('mood.html')

@app.route('/affirmations')
def affirmations():
    return render_template('affirmations.html')

@app.route('/progress')
def progress():
    return render_template('progress.html')

if __name__ == "__main__":
    app.run()
