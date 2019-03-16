import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

Injectable();
export class ResolverService<Data> {
  data$: Subject<Data>;
}
