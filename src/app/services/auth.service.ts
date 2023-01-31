import { ICredentials } from './../models/credentials';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: ICredentials) {
    return this.http.post(`${API_CONFIG.baseURL}/login`, creds, {
      observe:'response',
      responseType: 'text'
    });
  }

  successFullLogin(authToken: string) {
    localStorage.setItem('token', authToken)
  }

  isAuthenticated() {
   let token = localStorage.getItem('token')
   if(token != null) {
    return !this.jwtService.isTokenExpired(token);
   }
   else {
    return false;
   }
  }

  lougout() {
    localStorage.clear();
  }
}
