import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customFunctionInit();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    const url = localStorage.getItem('theme') || `./assets/css/colors/purple-dark.css`;;
    this.linkTheme.setAttribute('href', url);

    customFunctionInit();
  }

}
