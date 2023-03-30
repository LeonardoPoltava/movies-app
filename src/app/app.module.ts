import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {AuthInterceptor} from "./http/auth.interceptor";
import {EntrancePageModule} from "./movie/pages/entrance-page/entrance-page.module";
import {MovieInnerPageModule} from "./movie/pages/movie-inner-page/movie-inner-page.module";
import {UrlInterceptor} from "./http/url.interceptor";
import { MoviesSectionComponent } from './movie/components/movies-section/movies-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    EntrancePageModule,
    MovieInnerPageModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
