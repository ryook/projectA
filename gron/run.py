from app import app
import os

MONGO_URI = os.environ.get('MONGOLAB_URI')
if MONGO_URI:
      run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
else:
      app.run(host='localhost')
