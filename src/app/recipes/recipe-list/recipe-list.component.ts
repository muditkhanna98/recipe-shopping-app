import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Array<Recipe> = [
    new Recipe(
      'a test recipe',
      'this is simply a test',
      '../../../../assets/images/boeuf-bourguignon.webp'
    ),
    new Recipe(
      'a test recipe',
      'this is simply a test',
      '../../../../assets/images/boeuf-bourguignon.webp'
    ),
  ];
}
