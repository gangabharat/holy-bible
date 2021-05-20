import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommomComponent } from './commom.component';

const routes: Routes = [{ path: '', component: CommomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommomRoutingModule { }
