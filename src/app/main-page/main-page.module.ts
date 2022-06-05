import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {TemperaturePositivityModule} from "src/app/shared/pipes/temerature-positivity/temperature-positivity.module";



@NgModule({
  declarations: [
    MainPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: MainPageComponent}
        ]),
        TemperaturePositivityModule
    ]
})
export class MainPageModule { }
