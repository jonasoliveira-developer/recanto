import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnnoucements } from '../models/annoucements';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementsService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<IAnnoucements> {
    return this.http.get<IAnnoucements>(`${API_CONFIG.baseURL}/annoucements/${id}`)
  }

  findAll():Observable<IAnnoucements[]> {
    return this.http.get<IAnnoucements[]>(`${API_CONFIG.baseURL}/annoucements`)
  }

  create(annoucement: IAnnoucements): Observable<IAnnoucements> {
   return this.http.post<IAnnoucements>(`${API_CONFIG.baseURL}/annoucements`, annoucement)
  }

  update(annoucement: IAnnoucements): Observable<IAnnoucements> {
    return this.http.put<IAnnoucements>(`${API_CONFIG.baseURL}/annoucements/${annoucement.id}`, annoucement)
   }

   delete(id:any):Observable<IAnnoucements> {
    return this.http.delete<IAnnoucements>(`${API_CONFIG.baseURL}/annoucements/${id}`)
   }
 
}
