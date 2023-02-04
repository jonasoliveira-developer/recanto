import { IResident } from './../models/residents';
import { Observable } from 'rxjs';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http: HttpClient) { }

  findById(id:any):Observable<IResident> {
    return this.http.get<IResident>(`${API_CONFIG.baseURL}/residents/${id}`)
  }

  findAll(): Observable<IResident[]> {
   return this.http.get<IResident[]>(`${API_CONFIG.baseURL}/residents`)
  }

  create(resident: IResident): Observable<IResident> {
    return this.http.post<IResident>(`${API_CONFIG.baseURL}/residents`, resident)
  }
  update(employee: IResident): Observable<IResident> {
    return this.http.put<IResident>(`${API_CONFIG.baseURL}/residents/${employee.id}`, employee)
  }

  delete(id:any):Observable<IResident> {
   return this.http.delete<IResident>(`${API_CONFIG.baseURL}/residents/${id}`)
  }



}
