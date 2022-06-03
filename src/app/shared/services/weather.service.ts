import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  fetchCurrentWeather() {
    return this.http.get(
      `${this.apiUrl}weather`,
      {params: {
          lat: 59.9658185,
          lon: 30.2899677
        }}
      )
  }


}
