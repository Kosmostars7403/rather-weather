import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WeatherService} from "src/app/shared/services/weather.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  currentWeather$ = this.weatherService.fetchCurrentWeather()

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
          if(error.PERMISSION_DENIED) {
        }
      });
  }

}
