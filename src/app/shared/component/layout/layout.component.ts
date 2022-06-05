import { ChangeDetectionStrategy, Component } from '@angular/core';
import {WeatherService} from "src/app/shared/services/weather.service";
import {SvgIconNames} from "src/app/shared/component/svg/svg-icon-names";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  icons = SvgIconNames

  constructor(private weatherService: WeatherService) { }

  getMyCoords() {
    this.weatherService.getMyCoords()
  }

}
