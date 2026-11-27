from flask import flask, send_from_directory

app = Flask(__name__)
@app.route('/gofish')


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)