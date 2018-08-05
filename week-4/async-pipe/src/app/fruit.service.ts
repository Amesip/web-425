import { Injectable } from '@angular/core';
import { Fruit } from './fruit'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable()
export class FruitService {

	fruits: Fruit[] = [
		{id: 6, name: "apple", pricePerPound: "fifty cents", quantity: 4},
		{id: 7, name: "orange", pricePerPound: "forty-five cents", quantity: 3},
		{id: 8, name: "banana", pricePerPound: "sixty cents", quantity: 6},
		{id: 9, name: "lime", pricePerPound: "sevety-five cents", quantity: 7},
		{id: 10, name: "lemon", pricePerPound: "fifty-five cents", quantity: 2}
	];

	constructor() { }

	getFruits(): Observable<Fruit[]> {
		return of(this.fruits);
	}
}