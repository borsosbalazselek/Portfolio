import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toogle',
  standalone: false,
  templateUrl: './theme-toogle.component.html',
  styleUrl: './theme-toogle.component.css'
})
export class ThemeToogleComponent {

  isDarkMode = false;


  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    this.updateCursorColor(); // csak itt is kell hívni
  }

  updateCursorColor() {
    const cursorElement = document.querySelector('.typed-cursor') as HTMLElement;
    if (cursorElement) {
      if (this.isDarkMode) {
        cursorElement.style.color = '#ffffff'; // világoskék sötét módban
      } else {
        cursorElement.style.color = '#080c7b'; // sötétkék világos módban
      }
    }
  }

}
