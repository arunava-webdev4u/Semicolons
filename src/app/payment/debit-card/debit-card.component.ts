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
    debitCardPaymentForm: FormGroup
    fraudDetected: boolean = false;
    showModal: boolean = false;

    constructor(private _paymentService: PaymentService, private _router: Router) {
        this.debitCardPaymentForm = new FormGroup({
            amount: new FormControl(null, [Validators.required]),
            mode: new FormControl(null),
            nameOnCard: new FormControl(null, [Validators.required]),
            cardNumber: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^[0-9]+$/) ]),
            expiryDate: new FormGroup({
                month: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(12), Validators.pattern(/^[0-9]+$/)]),
                year: new FormControl(null, [Validators.required, Validators.min(1995), Validators.max(2040), Validators.pattern(/^[0-9]+$/)]),
            }),
            cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]),
        })
    }

    closeModal() {
        this.showModal = false;
    }

    onSubmit() {
        console.log(this.debitCardPaymentForm.get('expiryDate')?.get('month'))
        return;
        this.debitCardPaymentForm.value.mode = "debitCard"
        this._paymentService.pay(this.debitCardPaymentForm.value).subscribe((data) => {
            this.showModal = true;

            //! Local Code
            // this.fraudDetected = false;
            // console.log("Payment successful");
            // console.log(data);

            //! Main Code
            // if (data.data == "Legitimate Transaction") {
            //     this.fraudDetected = false;
            //     console.log("Payment successful");
            //     console.log(data);
            //     // this._router.navigateByUrl("/");
            // } else {
            //     this.fraudDetected = true;
            //     console.log("WARNING: Potential fraud detected!");
            //     console.log(data);
            // }
        })
    }
}
