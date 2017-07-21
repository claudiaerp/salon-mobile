import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {Salon} from '../models';

@Injectable()
export class SalonService {

  constructor(private http: Http) {}

  getSalons(): Observable<Salon[]> {
    return this.http
      .get('assets/salon.json')
      .delay(2000)
      .map((res: Response) => res.json());
  }

  getSalon(id): Observable<Salon> {
    return this.http
      .get('assets/salon.json')
      .map((res: Response) => res.json())
      .map((salons: Salon[]) => {
        for (let salon of salons) {
          if (salon.id === id) {
            return salon;
          }
        }
      });
  }
}