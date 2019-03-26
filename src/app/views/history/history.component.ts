import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../controllers/history.service';
import {Show} from '../../models/show';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: Show[];
  constructor(private historyService: HistoryService, private tvmaze: TvmazeService) {
    this.history = [];
  }

  ngOnInit() {
    this.historyService.getHistory().then(hist => {
      hist.map(sid => {
        this.tvmaze.fetchShow(sid).subscribe(
          res => this.history.unshift(new Show(res))
        );
      });
    });
  }

}
