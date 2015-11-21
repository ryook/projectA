#coding:utf-8
from app import app

from flask import request
import twitter
import json

@app.route('/tweet', methods=["GET","POST"])
def tweet():
    if request.method == "POST":
        post_data = json.loads(request.data)
        tweet_post(post_data["id"], post_data["title"])
        return "tweet post"
    else:
        return "tweet"


def tweet_post(user, title):
    ck = "4loGltlkoveljR3Xbm5Qfv1tF"
    cs = "5ITC7dvhClEnHSW4eZILnuWfKgTRfeAl2cG39GUy8Jl0hiWvHt"
    ak = "4184068047-bXemLTD1LItVKnMr3O7pLhTGsNDBpg8oBLRbaZ7"
    _as = "i24xDosOsRKQ0YHBDJW8GrduhyO8Xw4YrbTwVbNLwbg2u"
    tw_api = twitter.Api(
        consumer_key        = ck,
        consumer_secret     = cs,
        access_token_key    = ak,
        access_token_secret = _as,
    )
    hashtag = "#g_ORF2015"
    text = "たった今、彼は『{}』で果てました。 https://gron.herokuapp.com/#/personal_map/{} {}".format(title.encode("utf-8"),str(user) ,hashtag)
    tw_api.PostUpdate(text)
