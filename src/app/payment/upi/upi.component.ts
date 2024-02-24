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
    fraudDetected: boolean = false;
    showModal: boolean = false;

    constructor(private _paymentService: PaymentService, private _router: Router) {
        this.upiPaymentForm = new FormGroup({
            amount: new FormControl(null, [Validators.required]),
            upiId: new FormControl(null, [Validators.required]),
            mode: new FormControl(null)
        })
    }

    closeModal() {
        this.showModal = false;
    }

    onSubmit() {
        this.upiPaymentForm.value.mode = "UPI"
        this._paymentService.pay(this.upiPaymentForm.value).subscribe((data) => {
            this.showModal = true;

            //! Local Code
            this.fraudDetected = true;
            console.log("Payment successful");
            console.log(data);

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
