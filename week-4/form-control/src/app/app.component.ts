import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <link rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous">
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
	<ul class="navbar-nav">
		<li class="nav-item"><a href="#" class="nav-link">Home</a></li>
		<li class="nav-item"><a href="#" class="nav-link">About</a></li>
		<li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
	</ul>
</nav>

<br /><br />
<div class="container">
	<div class="row">
		<div class="col">
			<h2>Handling Form Events with Observables</h2>
			<br />
			<div class="form-group">
				<label for="txtStockPrice">Stock Price: </label>
				<input type="text" class="form-control" id="txtStockPrice" placeholder="Enter stock price..." [formControl]="searchInput">
			</div>
		</div>
	</div>

	<br /><br />
	<div class="row">
		<div class="col">
			<h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>
		</div>
	</div>
</div>
`,

styles: [`
	.txt-bold {
		font-weight: bold;
		background-color: lightgreen; 
		border-width: 1px; 
		border-style: solid;
		border-color: darkgreen
	}

`]
})
export class AppComponent {

	searchInput = new FormControl('');
	convertedStockPrice: string;

	constructor() {
		this.searchInput.valueChanges.pipe(debounceTime(500))
			.subscribe(stock => this.getStockQuoteFromServer(stock));
	}

	getStockQuoteFromServer(stock: string) {
		this.convertedStockPrice =
			`The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
	}
}