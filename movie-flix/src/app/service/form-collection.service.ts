import { Injectable } from '@angular/core';
import {BaseUrl} from '../core/base-url';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FormCollectionService {

  private baseurl = BaseUrl;
  constructor(private http: HttpClient) {}

  getcountryList(): Observable<any>{
    return this.http.get<any>(this.baseurl + 'inputselector/countrylist');
  }
  getAllList(): Observable<any>{
    return this.http.get<any>(this.baseurl + 'inputselector/getAlllist');
  }


}
