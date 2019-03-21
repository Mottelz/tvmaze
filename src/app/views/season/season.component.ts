import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material';
import { SeasonDataSource } from './season-datasource';
import {Episode} from '../../models/episode';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() season: Episode[];
  dataSource: SeasonDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['number', 'name', 'airDate'];

  ngOnInit() {
    this.dataSource = new SeasonDataSource(this.sort, this.season);
  }
}
