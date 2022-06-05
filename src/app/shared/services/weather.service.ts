import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";
import {Coords, CurrentDay} from "src/app/shared/models/current-day";
import {BehaviorSubject, map, Observable, of, switchMap, tap} from "rxjs";
import {UpcomingDaysResponse} from "src/app/shared/models/upcoming-days";
import {CacheRequest} from "src/app/shared/decorators/cache-request.decorator";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  defaultCoords: Coords = {
    lat: 50.846192,
    lon: 4.351594
  }

  userLocation$ = new BehaviorSubject<Coords | null>(null)
  loadingGeo$ = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) {
  }

  getMyCoords() {
    this.loadingGeo$.next(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.userLocation$.next({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
        this.loadingGeo$.next(false)
      },
      (error) => {
        if(error.PERMISSION_DENIED) {
          console.error("You don't give us access! How dare you?")
          this.loadingGeo$.next(false)
        }
      });
  }

  baseOnUserLocation<T>(fetchFn: (coords: Coords) => Observable<T>) {
    return this.loadingGeo$.pipe(
      switchMap((isLoading) => {
        if (isLoading) return of(null)

        return this.userLocation$.pipe(
          map(coords => coords ? coords : this.defaultCoords),
          switchMap(coords => fetchFn(coords)))
      })
    )
  }

  fetchCurrentWeather(): Observable<CurrentDay | null> {
    return this.baseOnUserLocation<CurrentDay>((coords) => {
      return this.http.get<CurrentDay>(
        `${this.apiUrl}weather`,
        {params: {...coords}}
      )
    })
  }

  @CacheRequest('four-days')
  fetchUpcomingWeather(): Observable<UpcomingDaysResponse | null> {
    return this.baseOnUserLocation<UpcomingDaysResponse>((coords) => {
      return this.http.get<UpcomingDaysResponse>(
        `${this.apiUrl}forecast`,
        {params: {...coords}}
      )
    })
  }

}
