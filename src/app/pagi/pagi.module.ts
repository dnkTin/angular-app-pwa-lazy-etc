import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagiRoutingModule } from './pagi-routing.module';
import { PagiComponent } from './pagi.component';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [PagiComponent, JwPaginationComponent],
  imports: [
    CommonModule,
    PagiRoutingModule
  ]
})
export class PagiModule { }
