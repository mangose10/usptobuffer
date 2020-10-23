import pymongo
import dns
import json
import sys
import mongo_connect

def getUsr():
  exists = mongo_connect.usrCol.count({'email':sys.argv[2]})
  if (exists > 0):
    usr = mongo_connect.usrCol.find_one({'email':sys.argv[2]})
    ret = {
      "name" : usr['name'],
      "pass" : usr['password'],
      "role" : usr['role']
    }
  else:
    ret = {
        "name" : "",
        "pass" : "",
        "role" : ""
    }
  return ret


usr = str(getUsr())
res = "{ \"express\": " + usr + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))