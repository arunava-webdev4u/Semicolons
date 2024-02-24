import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent {
    upiPaymentForm: FormGroup;

    constructor(private _paymentService: PaymentService, private _router: Router) {
        this.upiPaymentForm = new FormGroup({
            amount: new FormControl(null, [Validators.required]),
            upiId: new FormControl(null, [Validators.required]),
            mode: new FormControl(null)
        })
    }

    onSubmit() {
        this.upiPaymentForm.value.mode = "UPI"
        this._paymentService.pay(this.upiPaymentForm.value).subscribe((data) => {
            console.log(data);
            // this._router.navigateByUrl("/");
        });
    }
}
