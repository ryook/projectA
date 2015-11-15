from app import app
from flask import render_template

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route("/gron_post")
def gron():
    return render_template("index.html")
