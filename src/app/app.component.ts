import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import config from '../assets/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'lead-app';
  
  constructor(){
	this.title += environment.production ? '-prod' : '-dev';
	this.title += config.production ? '-prod' : '-dev';
  }
}
