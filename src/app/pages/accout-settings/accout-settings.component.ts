import { Component, OnInit } from '@angular/core';
import { link } from 'fs';
import { element } from 'protractor';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {
  
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>; 

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingsService.getLinks(this.links);

  }

  changeTheme(theme: string){
    this.settingsService.changeTheme(theme);

    this.settingsService.getLinks(this.links);
  }

}