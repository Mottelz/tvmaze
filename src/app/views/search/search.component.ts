import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TvmazeService } from '../../models/services/tvmaze.service';
import {Show} from '../../models/show';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  @Output() showList: EventEmitter<Show[]> = new EventEmitter();
  constructor(private tvmaze: TvmazeService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.tvmaze.fetchShows(this.searchQuery).subscribe(shows => {
      this.showList.emit(shows);
    });
  }

}
