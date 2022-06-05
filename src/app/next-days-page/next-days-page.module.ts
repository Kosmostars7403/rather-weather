import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextDaysPageComponent } from './components/next-days-page/next-days-page.component';
import {RouterModule} from "@angular/router";
import { DayCardComponent } from './components/day-card/day-card.component';
import {TemperaturePositivityModule} from "src/app/shared/pipes/temerature-positivity/temperature-positivity.module";



@NgModule({
  declarations: [
    NextDaysPageComponent,
    DayCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: NextDaysPageComponent}
        ]),
        TemperaturePositivityModule
    ]
})
export class NextDaysPageModule { }
