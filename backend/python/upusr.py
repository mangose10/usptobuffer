import pymongo
import dns
import json
import sys
import mongo_connect

def upUsr():

  jobj = json.loads(sys.argv[2])

  try:
    mongo_connect.usrCol.update_one(jobj['query'], {'$set' : jobj['newVals']})
    ret = "User has been updated."
  except:
    ret = "User with that email does not exist."

  return ret


err = str(upUsr())
res = "{ \"code\": " + err + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))