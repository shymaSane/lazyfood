import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipes} from '../../recipes.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipes
  @Output() showItem = new EventEmitter<void>();

  clicked(){
   this.showItem.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
