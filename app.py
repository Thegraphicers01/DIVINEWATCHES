from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Route for the Main Homepage & Store Interface
@app.route('/')
def home():
    # This automatically serves the index.html file from your templates folder
    return render_template('index.html')

# Run the local development server when this script executes
if __name__ == '__main__':
    # debug=True automatically reloads the server whenever you save code changes
    app.run(debug=True)
