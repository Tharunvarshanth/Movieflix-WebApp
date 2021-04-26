import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseUrl} from '../core/base-url';

@Injectable({
  providedIn: 'root'
})
export class HomeMovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get(`${BaseUrl}/home/allmovies`);
  }
  getGenereTypes(): Observable<any>{
    return this.http.get(`${BaseUrl}inputselector/generetypes`);
  }
  getMoviesByGenreTypes(genere: string): Observable<any>{
    return this.http.get(`${BaseUrl}home/getMoviesbygenere?generetype=${genere}`);
  }

  loadmoviebymoviename(movieName: string | null): Observable<any>{
    return this.http.get(`${BaseUrl}home/getmoviebymoviename?name=${movieName}`);
  }

}
