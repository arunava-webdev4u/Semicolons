import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    constructor(private _http: HttpClient) {}

    // debitCardPayment(payment: any) {
    //     return this._http.post('http://localhost:3000/payments', payment);
    // }

    // creditCardPayment(payment: any) {
    //     return this._http.post('http://localhost:3000/payments', payment);
    // }

    // upiPayment(payment: any) {
    //     return this._http.post('http://localhost:3000/payments', payment);
    // }

    pay(payment: any) {
        return this._http.post('http://localhost:3000/payments', payment);
    }
}
