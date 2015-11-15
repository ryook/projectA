#coding:utf-8

import os
from flask import jsonify, Response, abort, request
import json
from bson.objectid import ObjectId
from pymongo import MongoClient
from app import app

connection = MongoClient('localhost', 27017)
db = connection.gron
aggregate = db.aggregate

@app.route("/aggregate", methods = ["GET"])
def get_aggregate():
    data = aggregate.find_one()
    del data["_id"]
    return json.dumps(data)


@app.route("/aggregate", methods = ["POST"])
def post_aggregate():
    post_data = json.loads(request.data)
    db_data = aggregate.find_one()
    _id = db_data.pop("_id")
    for d in post_data:
        db_data[d["cluster"]] += d["count"]
    print db_data
    aggregate.update({"_id": ObjectId(_id)}, db_data)
    return "ok"
