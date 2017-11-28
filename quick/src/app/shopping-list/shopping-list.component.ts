import { Component, OnInit } from '@angular/core';
import { Ingredients} from '../sharing/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredients[] = [
  // here we are using the consructor to make new object thats why we made the model short 
  // in both cases we ll use ngfor inside th anchor tag
  new Ingredients ('tomato', 3),
  new Ingredients ('garlic', 1),
]
  
  constructor() { }

  ngOnInit() {
  
  }

  ingredientWasAdded(ingredient: Ingredients){
    this.ingredients.push(ingredient)
  }

}
