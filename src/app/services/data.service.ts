import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private dataSubject = new BehaviorSubject<boolean>(false);
    data$ = this.dataSubject.asObservable();
  
    updateData(newData: boolean) {
        console.log("state change");
        this.dataSubject.next(newData);
    }
}
