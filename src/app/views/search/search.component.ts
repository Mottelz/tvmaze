import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.router.navigateByUrl('search/' + this.searchQuery);
  }

}
