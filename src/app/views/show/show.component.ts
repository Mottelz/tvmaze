import {Component, OnInit} from '@angular/core';
import {Show} from '../../models/show';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {
  show: Show;
  constructor(private routeSnap: ActivatedRoute, private tvmaze: TvmazeService) {
    routeSnap.paramMap.subscribe(pm => this.loadShow(pm.get('id')));
  }

  ngOnInit() {
  }

  loadShow(id: string) {
    this.tvmaze.fetchShow(id).subscribe(res => this.show = new Show(res));
  }
}
