import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
	<span *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</span>
	`,
	styles: [`
		:host { background: cyan; }
  `]
})
export class OrderComponent implements OnInit {
  ngOnInit(){}
	@Input() quantity: number;
  @Input() stockSymbol: string;
}
