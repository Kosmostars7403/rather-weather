import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemperaturePositivityPipe} from "src/app/shared/pipes/temerature-positivity/temperature-positivity.pipe";



@NgModule({
  declarations: [TemperaturePositivityPipe],
  imports: [CommonModule],
  exports: [TemperaturePositivityPipe]
})
export class TemperaturePositivityModule { }
