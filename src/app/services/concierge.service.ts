import { IConcierge } from './../models/concierge';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ConciergeService {

  constructor(private http: HttpClient) { }

  findById(id:any):Observable<IConcierge> {
    return this.http.get<IConcierge>(`${API_CONFIG.baseURL}/providers/${id}`)
  }

  findAll():Observable<IConcierge[]> {
    return this.http.get<IConcierge[]>(`${API_CONFIG.baseURL}/providers`)
  }

  create(concierge: IConcierge):Observable<IConcierge> {
    return this.http.post<IConcierge>(`${API_CONFIG.baseURL}/providers`, concierge);
  }

  
  update(concierge: IConcierge):Observable<IConcierge> {
    return this.http.put<IConcierge>(`${API_CONFIG.baseURL}/providers/${concierge.id}`, concierge);
  }

  delete(id:any):Observable<IConcierge> {
    return this.http.delete<IConcierge>(`${API_CONFIG.baseURL}/providers/${id}`)
  }

}
