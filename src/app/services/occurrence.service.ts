import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { IOccurrence } from '../models/occurences';

@Injectable({
  providedIn: 'root'
})
export class OccurrenceService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<IOccurrence> {
    return this.http.get<IOccurrence>(`${API_CONFIG.baseURL}/occurrences/${id}`)
  }

  findAll():Observable<IOccurrence[]> {
    return this.http.get<IOccurrence[]>(`${API_CONFIG.baseURL}/occurrences`)
  }

  create(occurrence: IOccurrence): Observable<IOccurrence> {
    occurrence.person = localStorage.getItem('id')
   return this.http.post<IOccurrence>(`${API_CONFIG.baseURL}/occurrences`, occurrence)
  }

  update(occurrence: IOccurrence): Observable<IOccurrence> {
    return this.http.put<IOccurrence>(`${API_CONFIG.baseURL}/occurrences/${occurrence.id}`, occurrence)
   }

   delete(id:any):Observable<IOccurrence> {
    return this.http.delete<IOccurrence>(`${API_CONFIG.baseURL}/occurrences/${id}`)
   }
 
}
