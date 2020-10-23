import pymongo
import dns
import json
import sys

#client = pymongo.MongoClient("mongodb+srv://LeonardoRodriguez:Srpijmu@cluster0.8plx6.mongodb.net/PatentData?retryWrites=true&w=majority", readPreference="secondary")

# Command line arguments
client = pymongo.MongoClient(sys.argv[1])

patCol = client['PatentData']['Patents']
usrCol = client['PatentData']['Users']
labelCol = client['PatentData']['Labels']

#def addPat(pat):
# patCol.insert_one(pat)

