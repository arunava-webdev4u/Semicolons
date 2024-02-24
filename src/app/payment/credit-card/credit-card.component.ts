import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {
    showForm = false;
    creditCardPaymentForm: FormGroup

    constructor(private _paymentService: PaymentService, private _router: Router) {
        this.creditCardPaymentForm = new FormGroup({
            amount: new FormControl(null, [Validators.required]),
            mode: new FormControl(null),
            nameOnCard: new FormControl(null, [Validators.required]),
            cardNumber: new FormControl(null, [Validators.required]),
            expiryDate: new FormGroup({
                month: new FormControl(null, [Validators.required]),
                year: new FormControl(null, [Validators.required]),
            }),
            cvv: new FormControl(null, [Validators.required]),
        })
    }

    onSubmit() {
        this.creditCardPaymentForm.value.mode = "creditCard"
        this._paymentService.pay(this.creditCardPaymentForm.value).subscribe((data) => {
            console.log(data);
            // this._router.navigateByUrl("/");
        });
    }
}
