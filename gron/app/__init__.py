#coding:utf-8

from flask import Flask
app = Flask(__name__, static_url_path='')
app.debug = True

from app.model import personal
from app.model import aggregate
from app.route import index
from app.route import tweet
