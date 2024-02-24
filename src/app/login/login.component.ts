import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    wrongCredentials: boolean = false;
    // @Output() loginStatus = new EventEmitter<boolean>(false);

    constructor(private _router: Router, private _dataService: DataService) {
        this.loginForm = new FormGroup({
            username: new FormControl(null),
            password: new FormControl(null)
        })
    }

    login() {
        if (this.loginForm.value.username.toLowerCase() == "admin" && this.loginForm.value.password.toLowerCase() == "admin") {
            // this.loginStatus.emit(true);
            this._dataService.updateData(true);
            console.log("Login successful");
            this._router.navigateByUrl("/payment/creditCard");
        } else {
            this.wrongCredentials = true;
            console.log("Login failed");
        }
    }
}
