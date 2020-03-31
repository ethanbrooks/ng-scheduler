
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {SchedulerApiComponent} from './schedulerapi.component';


import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxSchedulerModule } from 'devextreme-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    SchedulerApiComponent
  ],
  imports: [

    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: SchedulerApiComponent, pathMatch: 'full'},
    ]),

    TransferHttpCacheModule,
    DxSchedulerModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [SchedulerApiComponent],
//  bootstrap: [SchedulerApiComponent]
})

export class AppElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(SchedulerApiComponent, { injector });
    customElements.define('app-schedulerapi', myElement);
  }
  ngDoBootstrap() {}
}


