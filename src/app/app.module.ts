import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {PivotApiComponent} from './schedulerapi.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {DxSchedulerModule} from 'devextreme-angular';

@NgModule({
  declarations: [
    PivotApiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'app-schedulerapi'}),
    RouterModule.forRoot([
      { path: '', component: PivotApiComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxSchedulerModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [PivotApiComponent]
})
export class AppModule { }
