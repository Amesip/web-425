import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { Fruit } from './fruit'
import { FruitService } from './fruit.service'


@Component({
	selector: 'app-root',
	template: `
	<link rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
		crossorigin="anonymous">
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		<ul class="navbar-nav">
			<li class="nav-item"><a routerLink="/home" class="nav-link">Home</a></li>
			<li class="nav-item"><a routerLink="/contact" class="nav-link">Contact</a></li>
			<li class="nav-item"><a routerLink="/about" class="nav-link">About</a></li>
		</ul>
	</nav>
	<br /><br />
	<div class="container">
		<div class="row">
			<div class="col">
				<h2>Famous Fruits</h2>
				<table class = "table table-hover table-bordered">
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
					<tr *ngFor="let fruit of fruits | async">
					<td> {{ fruit.id }} </td>  
					<td> {{ fruit.name }} </td>
					<td> {{ fruit.pricePerPound }} </td>
					<td> {{ fruit.quantity }} </td>
				</tr>
				</table>
			</div>
		</div>
	</div>
`,

	styleUrls: ['./app.component.css']
})
export class AppComponent {

	fruits: Observable<Fruit[]>;
	title = 'app';

	constructor(private fruitService: FruitService) { }

	ngOnInit() {
		this.fruits = this.fruitService.getFruits();
	}
}