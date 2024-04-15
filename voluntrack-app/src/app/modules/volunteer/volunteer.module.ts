import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VolunteerRoutingModule } from './volunteer-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VolunteerRoutingModule,
    HttpClientModule
  ]
})
export class VolunteerModule { }
