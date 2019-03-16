import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ResolverService } from './resolver.service';

@Component({
  selector: 'app-hello',
  template: `
    <p>Hello {{ name$ | async }}</p>
  `,
})
export class HelloComponent implements OnInit {
  name$: Subject<string>;

  constructor(private resolverService: ResolverService<string>) {}

  ngOnInit() {
    this.name$ = this.resolverService.data$;
  }
}
