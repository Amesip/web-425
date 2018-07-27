import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>
      Home is where Panda Wookee should like chewing his bone!
    </h2>
  `,
  styles: [ `
	.container {
		margin-top: 25px;
	}
	h2 {
		color: steelblue;
	}
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
