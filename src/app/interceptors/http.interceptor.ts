import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const apiReq: HttpRequest<unknown> = req.clone({
    url: `${ environment.apiBaseUrl }${ req.url }`,
  });
  return next(apiReq);
}