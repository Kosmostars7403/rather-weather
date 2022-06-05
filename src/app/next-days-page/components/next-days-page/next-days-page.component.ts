import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WeatherService} from "src/app/shared/services/weather.service";


@Component({
  selector: 'app-next-days-page',
  templateUrl: './next-days-page.component.html',
  styleUrls: ['./next-days-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextDaysPageComponent {
  upcomingWeather$ = this.weatherService.fetchUpcomingWeather()

  constructor(private weatherService: WeatherService) {}

}
