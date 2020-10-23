import pymongo
import dns
import json
import sys
import mongo_connect

def getUserAccounts():
 
    res = {'array':[]}
    for i,doc in enumerate(mongo_connect.usrCol.find()):
        res['array'].append(doc)

    return res

usr = str(getUserAccounts())
res = "{ \"express\": " + usr + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))