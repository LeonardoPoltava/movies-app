import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrancePageComponent } from './entrance-page/entrance-page.component';
import { HeaderComponent } from './header/header.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieInnerPageComponent } from './movie-inner-page/movie-inner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrancePageComponent,
    HeaderComponent,
    TrendingMoviesComponent,
    MovieCardComponent,
    MovieInnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
