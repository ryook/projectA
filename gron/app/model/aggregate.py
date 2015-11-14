#coding:utf-8

import os
from flask import jsonify, Response, abort, request
import json
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
