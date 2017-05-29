import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPRROUTES),
    SharedModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class HomeModule { }
