import os
import numpy as np
import pandas as pd
import scipy
import joblib
from sklearn.neighbors import NearestNeighbors

class Initializer:
    def __init__(self):
     self.path_movies ='movieflix-flask-ml/recommender/ml-latest-small/movies.csv'
     self.path_rating ='movieflix-flask-ml/recommender/ml-latest-small/ratings.csv'
     self.movie_user_mat_sparse,hashmap = self._prep_data()
     self.model = NearestNeighbors(
         n_neighbors = 20,
         algorithm = 'brute',
         metric = 'cosine')
     self.model.fit(self.movie_user_mat_sparse)



    def _prep_data(self):
        print("prep")
        df_movies = pd.read_csv(
            os.path.join(self.path_movies),
            usecols=['movieId', 'title', 'tmdbId'],
            dtype={'movieId': 'int32', 'title': 'str', 'tmdbId': 'int32'})

        df_ratings = pd.read_csv(
            os.path.join(self.path_rating),
            usecols=['userId', 'movieId', 'rating'],
            dtype={'userId': 'int32', 'movieId': 'int32', 'rating': 'float32'}
        )
        movie_user_mat = df_ratings.pivot(
            index='movieId', columns='userId', values='rating').fillna(0)

        movie_user_mat_sparse = scipy.sparse.cst_matrix(movie_user_mat.values)
        hashmap = {
            movie: i for i, movie in
            enumerate(list(df_movies.set_index('movieId').loc[movie_user_mat.index].tmdbId))
        }

        return movie_user_mat_sparse, hashmap

    def savedata(self):
        print("Sav")
        np.save('movieflix-flask-ml/recommender/ml-latest-small/hashmap.npy',self.hashmap)
        scipy.sparse.save_npz('movieflix-flask-ml/recommender/ml-latest-small/matrix.npz',self.movie_user_mat_sparse)
        joblib.dump(self.model,'movieflix-flask-ml/recommender/ml-latest-small/model.joblib')