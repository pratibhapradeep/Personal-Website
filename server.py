from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/hobbies.html')
def hobbies():
    return render_template('hobbies.html')

@app.route('/biomedical-research.html')
def biomedical_research():
    return render_template('biomedical-research.html')

@app.route('/finance.html')
def finance():
    return render_template('finance.html')

@app.route('/computer-science.html')
def computer_science():
    return render_template('computer-science.html')

if __name__ == '__main__':
    app.run(debug=True)
