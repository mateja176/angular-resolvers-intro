import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { ResolverService } from './resolver.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverGuard implements CanActivate {
  constructor(private resolverService: ResolverService<string>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const name = route.paramMap.get('name');
    this.resolverService.data$.next(name);

    return of(true).pipe(
      delay(1000),
      catchError(() => of(false)),
    );
  }
}
