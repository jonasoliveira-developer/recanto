import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{


  constructor(public loaderService: LoaderService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderService.isLoading.next(false)
        }
      )
    );
  }
}

export const LoaderInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
]
