import {Component, Input, OnInit} from '@angular/core';

import {NavController, Refresher} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';

import {DetailComponent} from '../detail/detail.component';

import {SalonService} from '../../providers';
import {Salon} from '../../models';

@Component({
  templateUrl: 'salon.component.html',
})
export class SalonComponent implements OnInit {
  salons: Salon[] = [];
  loading: boolean;
  salonSource: Observable<Salon[]>;
  @Input() search: string = "";

  constructor(
    private salonService: SalonService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.loading = true;
    const subscription = this.salonService.getSalons().subscribe(salons => {
      this.salons = salons;
      this.loading = false;
      subscription.unsubscribe();
    }, () => this.loading = false);
  }

  doRefresh(refresher: Refresher) {
    const subscription = this.salonService.getSalons().subscribe(salons => {
      this.salons = salons;
      refresher.complete()
      subscription.unsubscribe();
    }, () => refresher.complete());
  }

  openSalon(id: number) {
    this.nav.push(DetailComponent, {
      id: id
    });
  }  
}
