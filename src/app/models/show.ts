import {Episode} from './episode';

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
  episodes: Episode;

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
}
