import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit() {
    const start$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => true),
    );
    const end$ = this.router.events.pipe(
      filter(
        e =>
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError,
      ),
      map(() => false),
    );

    this.loading$ = merge(start$, end$);
  }
}
