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

  getMyCoords() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.weatherService.userLocation$.next({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      },
      (error) => {
        if(error.PERMISSION_DENIED) {
          console.error("You don't give us access! How dare you?")
        }
      });
  }

}
