import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";
import {CurrentDay} from "src/app/shared/models/current-day";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  fetchCurrentWeather(): Observable<CurrentDay> {
    return this.http.get<CurrentDay>(
      `${this.apiUrl}weather`,
      {params: {
          lat: 59.9658185,
          lon: 30.2899677
        }}
      )
  }


}
