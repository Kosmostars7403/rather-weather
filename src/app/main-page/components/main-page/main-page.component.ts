import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WeatherService} from "src/app/shared/services/weather.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  currentWeather$ = this.weatherService.fetchCurrentWeather()

  constructor(private weatherService: WeatherService) { }
}
