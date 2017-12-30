import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler}  from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authServe: AuthService){

    }
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            console.log(req);
            const copiedReq = req.clone({params: req.params.set('auth',this.authServe.getToken())})
        return next.handle(copiedReq);
    }
}


