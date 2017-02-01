import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, AlertModule.forRoot()],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
  providers: [DashboardComponent]
})
export class DashboardModule {
  constructor( @Optional() @SkipSelf() parentModule: DashboardModule) {
    throwIfAlreadyLoaded(parentModule, 'DashboardModule');
  }
}
