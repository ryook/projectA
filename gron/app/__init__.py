#coding:utf-8

from flask import Flask

app = Flask(__name__)
app.debug = True

from app.model import personal
from app.model import aggregate
from app import index
from app import tweet
