import {Component, EventEmitter, OnInit} from '@angular/core';
import {HistoryService} from '../../controllers/history.service';
import {HistoryItem} from '../../models/history-item';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: HistoryItem[];
  updated: EventEmitter<any> = new EventEmitter<any>();
  constructor(private historyService: HistoryService) {
    this.updated.subscribe(() => this.updateHistory());
    this.updated.emit();
  }

  ngOnInit() {
  }

  updateHistory() {
    this.historyService.getHistory().then(hist => {
      this.history = hist;
    });
  }

  clearHistory() {
    this.historyService.clearHistory().then(() => {
      this.updated.emit();
    });
  }
}
