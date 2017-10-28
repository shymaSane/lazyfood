import { Component, OnInit } from '@angular/core';
import { Recipes} from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] =  [
    new Recipes('test recipe', 'its ver tasty', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
