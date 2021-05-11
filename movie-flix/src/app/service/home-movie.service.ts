import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseUrl} from '../core/base-url';
import {SharingService} from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class HomeMovieService {

  constructor(private http: HttpClient, private shareservice: SharingService) { }

  getusermoviestmdbid(username: any): Observable<any>{
    console.log(username);
    return this.http.get(`${BaseUrl}usermovie/movieliketmdbid?name=${username}`);
  }

  getuserbuymovieinfo(moviename: any): Observable<any>{
    const username = this.shareservice.getUserSettings().email;
    return this.http.get(`${BaseUrl}/api/usermovie/movie?username=${username}&&moviename=${moviename}`);
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
