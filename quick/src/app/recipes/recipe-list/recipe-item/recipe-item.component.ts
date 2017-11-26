import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import {Recipes} from '../../recipes.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipes

  constructor() { }

  ngOnInit() {
  }

}
