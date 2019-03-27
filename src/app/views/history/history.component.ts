import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../controllers/history.service';
import {HistoryItem} from '../../models/history-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: HistoryItem[];
  constructor(private historyService: HistoryService, private router: Router) {
    this.historyService.getHistory().then(hist => {
      this.history = hist;
    });
  }

  ngOnInit() {
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.router.navigateByUrl('/');
  }
}
