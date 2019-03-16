import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HnResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return of(window.location.pathname.slice(1)).pipe(
      delay(2000),
      catchError(() => of('Error')),
    );
  }
}
