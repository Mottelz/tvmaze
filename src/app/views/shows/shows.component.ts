import {Component, OnInit} from '@angular/core';
import {Show} from '../../models/show';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  shows: Show[];
  constructor(private tvmaze: TvmazeService, private router: ActivatedRoute) {
    router.paramMap.subscribe(pm => this.loadShows(pm.get('query')));
  }

  ngOnInit() {
  }

  loadShows(query: string) {
    this.tvmaze.fetchShows(query).subscribe(
      shows => {
        this.shows = shows;
      }
    );
  }

}
