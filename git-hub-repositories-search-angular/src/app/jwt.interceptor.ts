import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string | null = null;

    try {
      const currentUser = JSON.parse(
        localStorage.getItem('currentUser') || '{}'
      );
      token = currentUser?.token;
    } catch (e) {
      console.error('Error parsing currentUser from localStorage', e);
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      console.warn('No token found, request not authenticated');
    }

    return next.handle(request);
  }
}
