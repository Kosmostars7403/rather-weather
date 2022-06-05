import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";
import {Coords, CurrentDay} from "src/app/shared/models/current-day";
import {BehaviorSubject, map, Observable, of, switchMap} from "rxjs";
import {
  HourlyWeather,
  HourlyWeathersGroupedResponse,
  HourlyWeathersResponse
} from "src/app/shared/models/upcoming-days";
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

        localStorage.setItem('userLocation', JSON.stringify({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }))

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

        const savedLocation = localStorage.getItem('userLocation')

        if (savedLocation) {
          return fetchFn(JSON.parse(savedLocation))
        }

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
  fetchUpcomingWeather(): Observable<HourlyWeathersGroupedResponse | null> {
    return this.baseOnUserLocation<HourlyWeathersGroupedResponse>((coords) => {
      return this.http.get<HourlyWeathersResponse>(
        `${this.apiUrl}forecast`,
        {params: {...coords}}
      ).pipe(
        map(res => {
          const list: HourlyWeather[][] = []
          const byDays: {[key: string]: HourlyWeather[]} = {}

          res?.list.forEach((hourly: HourlyWeather) => {
            const dayOfMonth = new Date(hourly.dt * 1000).getDate().toString()
            if (!(dayOfMonth in byDays)) byDays[dayOfMonth] = []
            byDays[dayOfMonth].push(hourly)
          })

          Object.keys(byDays).forEach((key, index) => {
            if (index > 3) return
            list.push(byDays[key])
          })

          return {
            ...res,
            list
          }
        })
      )
    })
  }
}
