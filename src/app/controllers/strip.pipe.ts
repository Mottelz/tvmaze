import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  transform(raw: string): string {
    const tags = ['<p>', '</p>', '<br>', '<b>', '</b>', '<i>', '</i>'];
    for ( const tag of tags) {
      raw = _.replace(raw, tag, '');
    }
    return _.unescape(raw);
  }

}
