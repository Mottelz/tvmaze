import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  constructor(private tvmaze: TvmazeService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.tvmaze.fetchShows(this.searchQuery).subscribe(shows => console.log(shows));
  }

}
