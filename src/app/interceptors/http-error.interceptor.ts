import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((httpError: HttpErrorResponse) => {

        if (httpError instanceof HttpErrorResponse) {

          if (httpError.status === 404) {
            // do something
          }
        }

        return throwError(httpError);
      })
    );
  }
}
