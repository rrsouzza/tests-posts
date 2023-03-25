import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  setTheme(newTheme: 'light-theme' | 'dark-theme'): void {
    this.currentTheme = newTheme;
  }
}
