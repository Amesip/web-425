import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <h2>
      Panda Wookee loves chewing his bone!
    </h2>
  `,
  styles: [ `
	.container {
		margin-top: 25px;
	}
	h2 {
		color: darkorange;
	}
`]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
