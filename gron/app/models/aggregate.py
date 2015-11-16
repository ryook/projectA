#coding:utf-8

import os
from flask import jsonify, Response, abort, request
import json
from bson.objectid import ObjectId
from pymongo import MongoClient
from app import app, db

# connection = MongoClient('localhost', 27017)
aggregate = db.aggregate

@app.route("/aggregate", methods = ["GET"])
def get_aggregate():
    data = aggregate.find()
    rtn_list = []
    for d in data:
        del d["_id"]
        rtn_list.append(d)
    return json.dumps(rtn_list)

@app.route("/aggregate/post", methods = ["POST"])
def post_aggregate():
    post_data = json.loads(request.data)
    db_data = aggregate.find_one({"age":post_data["age"]})
    _id = db_data.pop("_id")
    for d in post_data["count"]:
        db_data["count"][d["cluster"].encode("utf-8")] += d["count"]
    aggregate.update({"_id": ObjectId(_id)}, db_data)
    return "ok"
