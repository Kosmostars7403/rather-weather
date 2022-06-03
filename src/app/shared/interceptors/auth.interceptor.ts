import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {API_KEY} from "src/app/shared/providers/api-key.provider";



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(@Inject(API_KEY) private apiKey: string) {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const authRequest = request.clone({
      params: request.params.set('appid', this.apiKey)
    })

    return next.handle(authRequest)
  }
}
