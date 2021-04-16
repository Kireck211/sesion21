import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class TickService {
  getSeconds() {
    return new Observable(observable => {
      let i = 0;
      setInterval(() => {
        observable.next(i)
        i++;
      }, 1000);
    })
  }
}