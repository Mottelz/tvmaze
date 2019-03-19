import { Component } from '@angular/core';
import {Show} from './models/show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shows: Show[];

  onShowsUpdate(event) {
    this.shows = event;
  }
}
