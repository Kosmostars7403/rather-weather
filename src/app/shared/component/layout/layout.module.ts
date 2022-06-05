import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "src/app/shared/component/layout/layout.component";
import {RouterModule} from "@angular/router";
import {UiSvgModule} from "src/app/shared/component/svg/ui-svg.module";



@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, UiSvgModule],
  exports:[LayoutComponent]
})
export class LayoutModule { }
