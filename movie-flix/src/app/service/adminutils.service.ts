import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpRequest} from '@angular/common/http';
import {BaseUrl} from '../core/base-url';
import {Movie} from '../models/movie';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminutilsService {


  constructor(private http: HttpClient) { }

  removeMovieById(id: string): Observable<any>{
    return this.http.delete(`${BaseUrl}admin/removemovie?id=${id}`);
  }

  getuserbyemailorusername(username: string |null): Observable<any>{
    return this.http.get(`${BaseUrl}admin/user/getusersbytext?name=${username}`);
  }
  deleteuserbyadmin(id: string): Observable<any>{
    return this.http.delete(`${BaseUrl}admin/user/deleteuserbyadmin?id=${id}`);
  }

  updateMovieby_id(data: Movie): Observable<any>{
    const payload = {
      _id: data._id, movieName: data.movieName, geners: data.geners, language: data.language, cost: data.cost, producers: data.producers,
      castelist: data.castelist, directors: data.directors, runtime: data.runtime, description: data.description,
      videourl: data.videourl, releaseDate: data.releaseDate
    };
    return this.http.put(`${BaseUrl}admin/updatemovie`, payload);
  }
  loadmoviebymoviename(movieName: string | null): Observable<any>{
    return this.http.get(`${BaseUrl}admin/getmoviebymoviename?name=${movieName}`);
  }
  addmovie(data: Movie): Observable<any>{
    const payload = {
      movieName: data.movieName, geners: data.geners, language: data.language, cost: data.cost, producers: data.producers,
      castelist: data.castelist, directors: data.directors, runtime: data.runtime, description: data.description,
      videourl: data.videourl, _id: '', releaseDate: data.releaseDate
    };
    return this.http.post(`${BaseUrl}admin/addmovie`, payload);

  }

  getmoviesbynameseatch(text: string): Observable<any>{
     return this.http.get(`${BaseUrl}admin/searchbymoviename?text=${text}`);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${BaseUrl}/files`);
  }

  upload(file: File, id: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file, file.name);
    return this.http.post( `${BaseUrl}admin/uploadposter?id=${id}`, formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    }).pipe(
         catchError(this.errorMgmt)
    );
  }

  errorMgmt(error: HttpErrorResponse): Observable<never>{
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
