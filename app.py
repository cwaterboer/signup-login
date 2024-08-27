from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Dummy database for users
users = {}

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = users.get(username)
        if user and check_password_hash(user['password'], password):
            session['user'] = username
            return redirect(url_for('profile'))
        else:
          return "Invalid credentials!"
    
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm-password']

        if password == confirm_password:
            hashed_password = generate_password_hash(password)
            users[username] = {'password': hashed_password}
            return redirect(url_for('login'))
        else:
            return "Passwords do not match!"
    
    return render_template('signup.html')

@app.route('/profile')
def profile():
    if 'user' in session:
        username = session['user']
        return render_template('profile.html', username=username)
    else:
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
