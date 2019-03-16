import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: `
    <p>Hello {{ name }}</p>
  `,
})
export class HelloComponent implements OnInit {
  name: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.name = (this.activatedRoute.snapshot.data as {
      message: string
    }).message;
  }
}
