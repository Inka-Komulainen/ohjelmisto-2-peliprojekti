from flask import flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

@app.route('/<path:filename>')
def server_static(filename):
    return send_from_directory('static', filename)

@app.route('/hello')
def hello_world():
    return 'hello, world'

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)