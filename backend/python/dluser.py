import pymongo
import dns
import json
import sys
import mongo_connect

def mkUsr():

  jobj = json.loads(sys.argv[2])
  try:
    mongo_connect.usrCol.delete_one({'email':jobj})
    ret += "User has been deleted."
  except:
    ret += "User with that email does not exist."

  return ret


err = str(mkUsr())
res = "{ \"code\": " + err + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))