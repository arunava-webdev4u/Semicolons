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
        // console.log("Processing Payment");
        const customerId = "CUST11012304"
        const transactionId = this.generateTransactionId(25);
        payment.transactionId = transactionId;
        payment.customerId = customerId;
        
        // console.log(payment);

        return this._http.post('http://localhost:3000/payments', payment);
    }

    generateTransactionId(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
      
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
      
        return result;
    }
}
