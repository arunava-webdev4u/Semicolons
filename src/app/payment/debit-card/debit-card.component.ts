import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent {
    showForm = false;
    debitCardPaymentForm: FormGroup

    constructor(private _paymentService: PaymentService, private _router: Router) {
        this.debitCardPaymentForm = new FormGroup({
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
        this.debitCardPaymentForm.value.mode = "debitCard"
        this._paymentService.pay(this.debitCardPaymentForm.value).subscribe((data) => {
            console.log(data);
            // this._router.navigateByUrl("/");
        });
    }
}
