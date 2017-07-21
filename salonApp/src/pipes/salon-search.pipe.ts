import {Pipe, PipeTransform} from '@angular/core';

import {Salon} from '../models';

@Pipe({
  name: 'salonSearch'
})
export class SalonSearchPipe implements PipeTransform {
  transform(salons:Salon[], searchString: string) : any {
    let matches: Salon[] = [];

    if (!searchString) {
      return salons;
    }

    salons.forEach(function (salon) {
      if (salon.name.match(new RegExp(searchString, 'i'))) {
        matches.push(salon);
      }
    });

    return matches;
  }
}