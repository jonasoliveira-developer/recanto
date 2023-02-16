import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { IReservation } from './../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  findById(id:any):Observable<IReservation> {
    return this.http.get<IReservation>(`${API_CONFIG.baseURL}/reservations/${id}`)
  }

  findAll():Observable<IReservation[]> {
    return this.http.get<IReservation[]>(`${API_CONFIG.baseURL}/reservations`)
  }

  create(reservation: IReservation):Observable<IReservation> {
    return this.http.post<IReservation>(`${API_CONFIG.baseURL}/reservations`, reservation);
  }

  
  update(reservation: IReservation):Observable<IReservation> {
    return this.http.put<IReservation>(`${API_CONFIG.baseURL}/reservations/${reservation.id}`, reservation);
  }

  delete(id:any):Observable<IReservation> {
    return this.http.delete<IReservation>(`${API_CONFIG.baseURL}/reservations/${id}`)
  }

}
