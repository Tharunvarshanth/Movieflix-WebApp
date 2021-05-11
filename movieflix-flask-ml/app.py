from flask import Flask,jsonify,request
import pymongo
from flask import Flask
from flask_cors import CORS
import numpy as np
import scipy.sparse
import joblib
from recommender.initializer import Initializer
from recommender.recommender import Recommender


connection_url = "mongodb+srv://tharun:tharun@cluster0.djyjq.mongodb.net/movieflix?retryWrites=true&w=majority"


app = Flask(__name__)

client = pymongo.MongoClient(connection_url)
Database  = client.get_database('movieflix')
movies_collection = Database.movies
user_movie_info = Database.usermovieinfo
recommender = Recommender()

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/getmovielist',methods=['GET'])
def getmovielist():
    data = Database.movies_collection.find()
    print(data)

    return ""

@app.route('/getuserratinglist',methods=['GET'])
def getuserratinglist():
    queryObject = {'username':request.args.get('username')}
    print(request.args.get('username'))
    query = user_movie_info.find_one(queryObject)
    
    print(query)
    return "jsonify(query)"

@app.route('/api/suggestions',methods=['POST'])
def post():
        data = request.get_json()


        results = []
        checkedIds = []
        for item in data:
            results.extend(recommender.make_recommendation(int(item),2))
            checkedIds.append(int(item))

        filteredResults = [x for x in results if x not in checkedIds]

        uniqueResults =  set(filteredResults)

        formatedResults = {'results':[{"tmdbId":i}for i in uniqueResults]}

        return formatedResults




if __name__ == '__main__':
    app.run()
