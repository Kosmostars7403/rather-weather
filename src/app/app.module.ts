import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {API_URL} from "src/app/shared/providers/api-url.provider";
import {API_KEY} from "src/app/shared/providers/api-key.provider";
import {AuthInterceptor} from "src/app/shared/interceptors/auth.interceptor";
import {LayoutModule} from "src/app/shared/component/layout/layout.module";
import {environment} from "src/environments/environment.prod";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://api.openweathermap.org/data/2.5/'
    },
    {
      provide: API_KEY,
      useValue: environment.apiKey
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
