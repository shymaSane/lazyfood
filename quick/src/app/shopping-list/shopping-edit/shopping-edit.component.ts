import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ingredientAdded(addedName){
    this.addIngredient.emit(addedName)
  }

}
