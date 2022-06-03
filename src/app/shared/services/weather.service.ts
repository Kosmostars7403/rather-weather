import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";
import {Coords, CurrentDay} from "src/app/shared/models/current-day";
import {BehaviorSubject, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  defaultCoords: Coords = {
    lat: 50.846192,
    lon: 4.351594
  }

  userLocation$ = new BehaviorSubject<Coords | null>(null);

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) {
  }

  fetchCurrentWeather(): Observable<CurrentDay> {
    return this.userLocation$.pipe(
      switchMap(coords => {
        if (!coords) coords = this.defaultCoords

        return this.http.get<CurrentDay>(
          `${this.apiUrl}weather`,
          { params: {...coords}}
          )
      })
    )
  }

}
