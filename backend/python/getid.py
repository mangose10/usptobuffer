import pymongo
import dns
import json
import mongo_connect

def getId():
  import random
  import time
  random.seed(time.time())
  doc = random.randint(1, mongo_connect.patCol.count())
  pat = mongo_connect.patCol.find({})[doc-1]
  ret = {
    "id" : pat['documentId'],
    "patentCorpus" : pat['patentCorpus']
  }
  return ret


pat = str(getId())
res = "{ \"express\": " + pat + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))