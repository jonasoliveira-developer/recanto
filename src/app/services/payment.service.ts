import { API_CONFIG } from './../config/api.config';
import { IPayment } from './../models/payment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  findById(id:any):Observable<IPayment> {
    return this.http.get<IPayment>(`${API_CONFIG.baseURL}/payments/${id}`)
  }

  findAll():Observable<IPayment[]> {
    return this.http.get<IPayment[]>(`${API_CONFIG.baseURL}/payments`)
  }

  create(payment: IPayment):Observable<IPayment> {
    return this.http.post<IPayment>(`${API_CONFIG.baseURL}/payments`, payment);
  }

  
  update(payment: IPayment):Observable<IPayment> {
    return this.http.put<IPayment>(`${API_CONFIG.baseURL}/payments/${payment.id}`, payment);
  }
}
