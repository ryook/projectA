#coding:utf-8
from app import app
from flask import render_template

@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/gron_post")
def gron():
    return render_template("index.html")
