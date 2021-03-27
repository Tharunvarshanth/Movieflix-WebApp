import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SharingService} from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements  HttpInterceptor{

  constructor(private injector: Injector) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const shareservice = this.injector.get(SharingService);
    let authReq = req;
    if (shareservice.isLoggedIn()){
      const token = shareservice.getuserToken();

      console.log('interceptor', token);
      authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
      }
      );
    }

    return next.handle(authReq);
  }




}
