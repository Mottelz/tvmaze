import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeNumberFormatter'
})
export class EpisodeNumberFormatterPipe implements PipeTransform {

  transform(episode: number): any {
    let temp = '';
    if (episode < 10) {
      temp = '0' + episode.toString();
    } else {
      temp = episode.toString();
    }
    return temp;
  }

}
