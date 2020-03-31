import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {SchedulerApiComponent} from './schedulerapi.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {DxSchedulerModule} from 'devextreme-angular';

@NgModule({
  declarations: [
    SchedulerApiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'app-schedulerapi'}),
    RouterModule.forRoot([
      { path: '', component: SchedulerApiComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxSchedulerModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [SchedulerApiComponent]
})
export class AppModule { }
