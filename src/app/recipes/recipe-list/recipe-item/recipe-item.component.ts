import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe = { name: '', description: '', imagePath: '' };
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
