import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SetClassNumberService {
  classNumber: number = 0;
  setCount: BehaviorSubject<number>;
  constructor() {
    this.setCount = new BehaviorSubject(this.classNumber);
  }
  nextClassNumber(num: number) {
    this.setCount.next(num);
  }
}
