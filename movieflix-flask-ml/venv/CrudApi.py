class CrudApi:
    def __init__(self,data):
        self.client()
        self.client = MongoClient("mongodb://localhost:27017/")
        database = data['database']
        collection = data['collection']
        cursor = self.client[database]
        self.collection = cursor[collection]
        self.data = data