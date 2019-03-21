export class Episode {
  id: number;
  name: string;
  season: number;
  episode: number;
  airDate: string;
  summary: string;
  image: string;

  constructor(a?) {
    if (a) {
      this.id = a.id;
      this.name = a.name;
      this.season = a.season;
      this.episode = a.number;
      this.airDate = a.airdate;
      this.summary = a.summary;
      this.image = (a.image) ? a.image.original : null;
    }
  }
}
