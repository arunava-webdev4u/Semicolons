import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
    constructor(private _router: Router) {}

    onSelectOption(event: Event): void {
        const selectedValue = (event.target as HTMLSelectElement).value;
        this._router.navigateByUrl(`/payment/${selectedValue}`);
    }
}
