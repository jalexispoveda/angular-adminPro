import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() { 
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  getLinks(links: NodeListOf<Element>){
    links.forEach(element => {
      element.classList.remove('working');
      const elementTheme = element.getAttribute('data-theme');
      const btnElementTheme = `./assets/css/colors/${elementTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnElementTheme === currentTheme ) {
        element.classList.add('working');
      }
    });
  }
}
