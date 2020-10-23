import pymongo
import dns
import json
import sys
import mongo_connect


def postResponse():
    
    from datetime import date
    
    try:
        labelObj = json.loads(sys.argv[2])

        # labelObj.date =  date.today()

        mongo_connect.labelCol.insert_one(labelObj)
        ret = "Success"

    except:
        ret = "Fail"
   

    return ret
   
err = str(postResponse())
res = "{ \"code\": " + err + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))