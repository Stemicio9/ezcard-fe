import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from "../services/storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}


  buildHeaders(){
    const headers = new HttpHeaders().set('X-Auth', this.storageService.getTokenFromStorage() ?? "");
    headers.set( 'Content-Type', 'application/json');
    return headers;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const duplicate = request.clone({headers: this.buildHeaders()});
    return next.handle(duplicate);
  }
}
