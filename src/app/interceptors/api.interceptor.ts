import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HttpUrlEncodingCodec
} from '@angular/common/http';
import {Observable} from 'rxjs';

declare var window;

class CustomQueryEncoderHelper extends HttpUrlEncodingCodec {
  encodeKey(k: string): string {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }

  encodeValue(v: string): string {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private static _createBody(body: HttpParams): HttpParams {
    return new HttpParams({
      fromString: 'jsonData=' + encodeURIComponent(JSON.stringify(body)),
      encoder: new CustomQueryEncoderHelper(),
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isPortletRequest: boolean = request.url.indexOf('/web/guest') > -1;

    let headers: HttpHeaders = new HttpHeaders()
      .set('X-Request-Type', 'resource');

    if (window.Liferay) {
      headers = headers.set('X-Csrf-Token', window.Liferay.authToken);
    }

    if (isPortletRequest) {
      headers = headers.set('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
      headers = headers.set('Accept', 'application/json, text/javascript, */*; q=0.01');
    }

    const authRequest = request.clone({
      body: isPortletRequest && request.method === 'POST' ? ApiInterceptor._createBody(request.body) : request.body,
      headers
    });

    return next.handle(authRequest);
  }
}
