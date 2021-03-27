import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

interface Userprofilereg{
  username: string;
  password: string;
  country: string;
  name: string;
  phonenumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerurl = 'http://localhost:8080/api/user/register';
  private loginurl = 'http://localhost:8080/api/user/login';
  private authenticateurl = 'http://localhost:8080/api/user/authenticate';

  constructor(private http: HttpClient) { }

  registerUser(user: Userprofilereg): Observable<any>{
       console.log('registeruser', user);
       return this.http.post<any>(this.registerurl, user);
  }

  loginUser(value: any): Observable<any>{
       console.log(value);
       return this.http.post<any>(this.loginurl, {username: value.username, password: value.password});
  }




  loadbyusername(token: string | null): Observable<any>{
    return this.http.post<any>(this.authenticateurl, {jwttoken: token});
  }
}
