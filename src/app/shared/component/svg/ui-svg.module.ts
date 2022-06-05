import { NgModule } from '@angular/core';
import {SvgIconComponent} from "src/app/shared/component/svg/svg-icon.component";
import {SVG_ICONS_PATH} from "src/app/shared/component/svg/svg-icons-path";


@NgModule({
  declarations: [SvgIconComponent],
  exports: [SvgIconComponent],
  providers: [{
    provide: SVG_ICONS_PATH,
    useValue: "assets/svg/shared.svg"
  }]
})
export class UiSvgModule { }
