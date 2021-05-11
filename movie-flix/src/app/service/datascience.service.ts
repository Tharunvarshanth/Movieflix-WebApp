import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharingService} from './sharing.service';
import {Observable} from 'rxjs';
import {flaskBaseUrl} from '../core/base-url';

@Injectable({
  providedIn: 'root'
})
export class DatascienceService {



  constructor(private http: HttpClient, private shareservice: SharingService) { }

  getrecommendedmoviesbylikes(tmdbIdarray: []): Observable<any>{


    return this.http.post(`${flaskBaseUrl}/suggestions`, tmdbIdarray);

  }
}
