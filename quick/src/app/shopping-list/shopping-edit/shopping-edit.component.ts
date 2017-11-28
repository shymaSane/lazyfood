import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../sharing/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('addedName') addedNameRef: ElementRef;
  @ViewChild('addedAmount') addedAmountRef: ElementRef;
  @Output() addIngredient= new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }

  ingredientAdded(){
   const ingNmae = this.addedNameRef.nativeElement.value
   const ingAmount = this.addedAmountRef.nativeElement.value
   const newIngredient = new Ingredients(ingNmae, ingAmount)
   this.addIngredient.emit(newIngredient)
  }

}
