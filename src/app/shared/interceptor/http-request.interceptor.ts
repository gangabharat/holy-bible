import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<unknown>> {    
    console.log(req);
    //Modify request before sent 
    let modreq = req.clone(
      {
        //url: 'https://jsonplaceholder.typicode.com/werwerwer'
      }
    )

    return next.handle(modreq).pipe(tap(
      event => {
        if (event.type === HttpEventType.Response) {
          console.log(event);                    
        }
      },
      () => {              
      }
    ),
      //Catch Errors from the URL
      catchError(err => {               
        return throwError(err);
      }),

      //retry(2),
      //retrying network failure contiues error
      //   retryWhen(errors => {
      //     return errors
      //             .pipe(
      //                 tap(() => console.log('retrying...'))
      //             );
      // } )

      //retrying specific time Interval
      // retryWhen(errors => {
      //   return errors
      //           .pipe(
      //               delayWhen(() => timer(5000)),
      //               tap(() => this.toastr.info(`resending request`, 'Response'))
      //           );
      // } )

      // retryWhen(errors => errors.pipe(
      //   concatMap((error, iteration) => 
      //       timer(Math.pow(2, iteration) * 1000, 5))))

      // retryWithDelay({
      //   delay: 1000,
      //   maxRetryAttempts: 3,
      //   scalingFactor: 10,
      //   excludedStatusCodes: [500],

      // }),
      // finalize(() => {
      //   this.pnService.setNotification(`${modreq.url}`, 'Final');
      // })

    );
  }
}
