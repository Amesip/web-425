import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";

@Injectable(
)
export class FruitService {
  getFruit(): Fruit {
		return new Fruit(2, "apple", "red");
	}
}
