import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextDaysPageComponent } from './components/next-days-page/next-days-page.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NextDaysPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: NextDaysPageComponent}
    ])
  ]
})
export class NextDaysPageModule { }
