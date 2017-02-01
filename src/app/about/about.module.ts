import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule, ModalModule, TypeaheadModule } from 'ng2-bootstrap';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
  providers: [AboutComponent]
})
export class AboutModule {
  constructor( @Optional() @SkipSelf() parentModule: AboutModule) {
    throwIfAlreadyLoaded(parentModule, 'AboutModule');
  }
}
