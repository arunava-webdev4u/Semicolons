import { Component, Input } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Fraud Detector';
    // loginStatus: boolean = false;
    @Input() data$: boolean | undefined;

    constructor(private _dataService: DataService) {}

    ngOnInit(): void {
        initFlowbite();
        // this._dataService.data$.subscribe(data => {
        //     this.loginStatus = data;
        // });
        console.log(this.data$);
    }
}
