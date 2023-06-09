import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-shopping-app';
  loadedFeature: string = 'recipe';

  onNavigate(featureSelected: string) {
    this.loadedFeature = featureSelected;
  }
}
