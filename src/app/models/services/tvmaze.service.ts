import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Show} from '../show';
import {Episode} from '../episode';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  base = 'http://api.tvmaze.com';
  constructor(private http: HttpClient) {}

  fetchShows(query: string) {
    const url = this.base + '/search/shows?q=' + query;
    return this.http.get(url).pipe(
      map( res => {
        return (res as any[]).map(item => new Show(item.show));
      })
    );
  }

  fetchShow(showID: string) {
    const url = this.base + '/shows/' + showID;
    return this.http.get(url);
  }

  fetchEpisodes(showID: number) {
    const url = this.base + '/shows/' + showID + '/episodes';
    return this.http.get(url).pipe(
      map(res => {
        return (res as any[]).map(item => new Episode(item));
      })
    );
  }
}
