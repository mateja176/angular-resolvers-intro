import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HnResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return of('Alligator').pipe(delay(2000));
  }
}
