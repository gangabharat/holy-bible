import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommomRoutingModule } from './commom-routing.module';
import { CommomComponent } from './commom.component';


@NgModule({
  declarations: [CommomComponent],
  imports: [
    CommonModule,
    CommomRoutingModule
  ]
})
export class CommomModule { }
