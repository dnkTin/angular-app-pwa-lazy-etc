import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagiComponent } from './pagi.component';

const routes: Routes = [{ path: '', component: PagiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagiRoutingModule { }
