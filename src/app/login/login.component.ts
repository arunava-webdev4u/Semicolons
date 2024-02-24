import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

// import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private _router: Router) {
        this.loginForm = new FormGroup({
            username: new FormControl(null, [Validators.required]),
        })
    }

    onSubmit() {
        console.log(this.loginForm.value);
        // this._router.navigateByUrl('/payment/creditCard');
    }
}
