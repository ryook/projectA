# app.config.from_object('config')

from flask import Flask
import os
from pymongo import MongoClient

app = Flask(__name__, static_url_path='')
MONGO_URL = os.environ.get('MONGOLAB_URI')
print "###################################"
print MONGO_URL
if MONGO_URL:
    connection = MongoClient(MONGO_URL)
    db = connection.heroku_8335r02w
else:
    connection = MongoClient('localhost', 27017)
    db = connection.gron
app.debug = True

from app.models import personal
from app.models import aggregate
from app.routes import index
from app.routes import tweet
