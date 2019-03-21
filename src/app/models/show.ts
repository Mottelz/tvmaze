import {Episode} from './episode';
import * as _ from 'lodash';

export class Show {
  name: string;
  id: number;
  status: string;
  premiered: string;
  runtime: number;
  summary: string;
  image: string;
  lastEp: Episode;
  nextEp: Episode;
  episodes: Episode[][];

  constructor(a?) {
    if (a) {
      this.name = a.name;
      this.id = a.id;
      this.status = a.status;
      this.premiered = a.premiered;
      this.runtime = a.runtime;
      this.summary = a.summary;
      this.image = (a.image) ? a.image.original : null;
    }
  }

  // Take an array of objects and sort them by season.
  addEpisodes(unsorted: Episode[]): void {
    this.episodes = [];
    const temp = _.groupBy(unsorted, (o) => o.season);
    _.forOwn(temp, (key, val) => {
      this.episodes.push(temp[val]);
    });

  }
}
