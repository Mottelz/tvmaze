import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../../models/show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {
  @Input() show: Show;
  constructor() { }

  ngOnInit() {
  }

}
