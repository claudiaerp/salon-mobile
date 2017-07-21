import {Component, ViewChild} from '@angular/core';

import {App, ModalController, Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import 'rxjs/add/operator/distinctUntilChanged';

import {AboutModalComponent} from '../components/about/about-modal.component';
import {SalonComponent} from '../pages/order/salon.component';

@Component({
  templateUrl: './app.component.html'
})
export class SalonAppComponent {
  rootPage: any = SalonComponent;
  toastDuration = 500;
  private pages = {};
  @ViewChild(Nav) nav: Nav;

  constructor(
    private app: App,
    private platform: Platform,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
    this.pages = {
      'SalonPage': SalonComponent
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openAboutModal() {
    const modal = this.modalCtrl.create(AboutModalComponent);
    modal.present()
  }

  openPage(pageName) {
    const component = this.pages[pageName];
    if (!component) {
      return;
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(component);
  }
}
