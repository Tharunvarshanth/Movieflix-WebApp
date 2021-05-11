import numpy as np
import scipy.sparse
import joblib

class Recommender:
    """
    item collaborative recommended filtering system
    """
    def __init__(self):
        self.movie_user_mat_sparse = scipy.sparse.load_npz('recommender/matrix.npz')
        self.hashmap = np.load('recommender/hashmap.npy', allow_pickle=True).item()
        self.model = joblib.load('recommender/model.joblib')

    def findMovieIndex(self,inputTmdbId, hashmap):
        results = 1
        reverse_hashmap = {v: k for k, v in hashmap.items()}
        for i in reverse_hashmap:
            if (reverse_hashmap[i] == inputTmdbId):
                results = i
                break;

        return results

    def _inference(self,inputTmdbId, n_recommendations):

        movieIndex = self.findMovieIndex(inputTmdbId, self.hashmap)

        distances, indexes = self.model.kneighbors(
            self.movie_user_mat_sparse[movieIndex],
            n_neighbors=n_recommendations
        )

        return indexes;

    def make_recommendation(self,inputTmdbId, n_recommendations):

        # get recommendation
        indexes = self._inference(inputTmdbId, n_recommendations)

        results = []
        reverse_hashmap = {v: k for k, v in self.hashmap.items()}
        for i in indexes[0]:
            results.append(reverse_hashmap[i])
        return results