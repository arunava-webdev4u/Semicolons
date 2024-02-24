import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignalService {
    constructor() {}
    private signalSubject = new Subject<boolean>();

    signal$ = this.signalSubject.asObservable();

    sendSignal(signal: boolean) {
        this.signalSubject.next(signal);
    }
}
