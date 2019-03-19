import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  transform(raw: string): string {
    let final = raw.replace(/<[^>]*>/g, '');
    final = _.unescape(final);
    return final;
  }

}
