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
        const customerId = "CUST11012304"
        const transactionId = this.generateTransactionId(25);
        const transactionDate = this.getTransactionDate();
        const transactionTime = this.getTransactionTime();

        payment.transactionId = transactionId;
        payment.customerId = customerId;
        payment.transactionDate = transactionDate;
        payment.transactionTime = transactionTime;

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

    getTransactionDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = currentDate.getDate().toString().padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

    getTransactionTime() {
        const currentDate = new Date();

        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
}
