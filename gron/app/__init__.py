# app.config.from_object('config')

from flask import Flask
app = Flask(__name__, static_url_path='')
app.debug = True

from app.models import personal
from app.models import aggregate
from app.routes import index
from app.routes import tweet
