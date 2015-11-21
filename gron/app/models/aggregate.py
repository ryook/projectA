#coding:utf-8

import os
from flask import jsonify, Response, abort, request
import json
from bson.objectid import ObjectId
from pymongo import MongoClient
from app import app, db

# connection = MongoClient('localhost', 27017)
aggregate = db.aggregate
personal = db.personal

@app.route("/aggregate", methods = ["GET"])
def get_aggregate():
    data = aggregate.find({'$or':[{'age':"10"},{'age':"20"},{'age':"30"},
                                    {'age':"40"},{'age':"50"},{'age':"60"}]})
    count_list = [d["count"] for d in data]
    rtn_dic = {"3_1": 0, "3_3": 0, "3_2": 0, "3_4": 0, "2_1": 0, "2_2": 0, "2_3": 0, "2_4": 0, "1_4": 0, "1_3": 0, "1_2": 0, "1_1": 0, "4_2": 0, "4_3": 0, "4_1": 0, "4_4": 0}
    for clu in rtn_dic.keys():
        for r in count_list:
            rtn_dic[clu] += r[clu]
    # for d in data:
    #     del d["_id"]
    #     rtn_list.append(d)
    rtn_data = {}
    rtn_data["count"] = rtn_dic
    rtn_data["user"] = personal.find().count()
    return json.dumps(rtn_data)

@app.route("/aggregate/post", methods = ["POST"])
def post_aggregate():
    post_data = json.loads(request.data)
    db_data = aggregate.find_one({"age":post_data["age"]})
    _id = db_data.pop("_id")
    for d in post_data["count"]:
        db_data["count"][d["cluster"].encode("utf-8")] += d["count"]
    aggregate.update({"_id": ObjectId(_id)}, db_data)
    return "ok"
