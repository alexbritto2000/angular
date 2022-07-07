

import { Injectable } from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,finalize } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    constructor(public appService: AppService){}
    
    //below req ah tha change panni newreq ah kudukrom
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.appService.isLoading.next(true);
        console.log("Interceptor", req);
        //create url and clone and overwright it
        //requestah apdiye eduthuttu url mattum change aagum
        //Ethana API call pannalum ANtha headers update aagirum
        const newReq = req.clone({url:"https://jsonplaceholder.typicode.com/"+req.url,
        headers: req.headers.set('Authorization','Gopi Test')});
        console.log("Interceptor", newReq);
        //ANy errors vantha intha response object vachi handle pannikkalam
        return next.handle(newReq).pipe(
            finalize(
                ()=>{
                    this.appService.isLoading.next(false);
                }
            ),
            tap(
                result => {
                    console.log("Success", result);
                },
                error => {
                    console.log("error",error);
                }
            )
        )
    }
}

/* @Injectable()
export class LoggingInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):  {
        const started = Date.now();
        let ok: string;

        return nextTick.handle(req)
        .pipe(
            tap(
                event => ok = event instanceof HttpResponse ? 'succeeded' : '',
                error => ok = 'failed'
            ),

        finalize(() =>{
            const elapsed = Date.now() - started;
            const msg = `$(req.method) "$(req.urlWithParams)"
              $(ok) in $(elapsed) ms.`;
              console.log(msg); 
        })    
        );
    }
} */

