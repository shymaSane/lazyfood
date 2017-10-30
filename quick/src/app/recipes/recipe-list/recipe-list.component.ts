import { Component, OnInit } from '@angular/core';
import { Recipes} from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] =  [
    new Recipes('test recipe', 'its very tasty', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
    new Recipes ('maqloba', 'you ll eat your fingers after it', 'https://thefooddoctor.files.wordpress.com/2011/12/makloubeh-copy.jpg?w=450')
  ];
  constructor() { }

  ngOnInit() {
  }

}
