import { Component } from '@angular/core';
import { HistoryService } from './controllers/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public history: HistoryService) {
  }

}
