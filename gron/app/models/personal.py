#coding:utf-8

import os
from flask import jsonify, Response, abort, request
import json
from pymongo import MongoClient
from app import app, connection
from app.routes import tweet

# connection = MongoClient('localhost', 27017)
db = connection.gron
personal = db.personal

@app.route("/personal_map/<id>", methods=["GET"])
def show_pmap(id):
    return app.send_static_file("index.html")

@app.route("/personal/<id>", methods=["GET"])
def get_personal(id):
    personal_data = personal.find_one({"id":int(id)})
    print personal_data
    print type(personal_data)
    if personal_data == None:
        abort(404)
    del personal_data["_id"]
    return json.dumps(personal_data)

@app.route("/personal/post", methods=["POST"])
def post_personal():
    _id = personal.find().count() + 1
    data = json.loads(request.data)
    data["id"] = _id
    personal.insert(data)
    tweet.tweet_post(_id, data["title"])
    return str(_id)

@app.route("/personal/update", methods=["POST"])
def update_personal():
    data = json.loads(request.data)
    personal.update({"id":1},data)
    return "OK"
