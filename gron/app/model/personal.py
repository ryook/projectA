#coding:utf-8

import os
from flask import jsonify, Response, abort, request
import json
from pymongo import MongoClient
from app import app

connection = MongoClient('localhost', 27017)
db = connection.gron
personal = db.personal

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
    data = json.loads(request.data)
    personal.insert(data)
    return "OK"

@app.route("/personal/update", methods=["POST"])
def update_personal():
    data = json.loads(request.data)
    personal.update({"id":1},data)
    return "OK"
