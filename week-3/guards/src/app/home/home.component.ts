import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
	<h1 class="home">Home is where the Panda Wookee is!</h1>
`,
styles: [ `
	.home { background-color: orange; }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
