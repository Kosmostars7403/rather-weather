import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";
import {Coords, CurrentDay} from "src/app/shared/models/current-day";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {UpcomingDaysResponse} from "src/app/shared/models/upcoming-days";


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

  baseOnUserLocation<T>(fetchFn: (coords: Coords) => Observable<T>) {
    return this.userLocation$.pipe(
      map(coords => coords ? coords : this.defaultCoords),
      switchMap(coords => fetchFn(coords)))
  }

  fetchCurrentWeather(): Observable<CurrentDay> {
    return this.baseOnUserLocation<CurrentDay>((coords) => {
      return this.http.get<CurrentDay>(
        `${this.apiUrl}weather`,
        {params: {...coords}}
      )
    })
  }

  fetchUpcomingWeather(): Observable<UpcomingDaysResponse> {
    return this.baseOnUserLocation<UpcomingDaysResponse>((coords) => {
      return this.http.get<UpcomingDaysResponse>(
        `${this.apiUrl}forecast`,
        {params: {...coords}}
      )
    })
  }

}
