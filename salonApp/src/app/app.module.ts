import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { SalonAppComponent } from './app.component';
import { SalonComponent } from '../pages/order/salon.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { AboutModalComponent } from '../components/about/about-modal.component';

import { SalonService } from '../providers';
import { SalonSearchPipe } from '../pipes';

@NgModule({
  declarations: [
    SalonAppComponent,
    SalonComponent,
    DetailComponent,
    AboutModalComponent,
    SalonSearchPipe
  ],
  imports: [
    IonicModule.forRoot(SalonAppComponent, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SalonAppComponent,
    SalonComponent,
    DetailComponent,
    AboutModalComponent
  ],
  providers: [SalonService]
})
export class AppModule {}
