import {Component, OnInit} from '@angular/core';

import {NavParams} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

import {SalonService} from '../../providers';
import {Salon} from '../../models';

@Component({
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
  salon: Salon;

  constructor(
    private navParams: NavParams,
    private salonService: SalonService
  ) {}

  ngOnInit(): void {
    this.salonService
      .getSalon(this.navParams.get('id'))
      .toPromise()
      .then(salon => this.salon = salon);
  }
}
