#coding:utf-8
from app import app

from flask import request
import twitter

@app.route('/tweet', methods=["GET","POST"])
def tweet():
    if request.method == "POST":
        # print type(request.form["title"])
        tweet_post("1", request.form["title"].encode("utf-8"))
        # tweet_post("1", request.data)
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
    text = "{}さんは「{}」で果てました。 {}".format(user,title, hashtag)
    tw_api.PostUpdate(text)
