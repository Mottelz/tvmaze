import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../../models/show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  @Input() shows: Show[];
  constructor() { }

  ngOnInit() {
  }

}
