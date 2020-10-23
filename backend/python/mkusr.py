import pymongo
import dns
import json
import sys
import mongo_connect

def mkUsr():

  jobj = json.loads(sys.argv[2])

  try:
    exists = mongo_connect.usrCol.count({'email':jobj.email})
    ret = "User with email already exists."
  except:
    mongo_connect.usrCol.insert_one(jobj)
    ret = "User has been added."

  return ret


err = str(mkUsr())
res = "{ \"code\": " + err + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))