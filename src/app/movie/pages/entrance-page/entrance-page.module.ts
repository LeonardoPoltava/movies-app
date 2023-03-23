import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrendingMoviesModule} from "../../components/trending-movies/trending-movies.module";
import {MovieCardModule} from "../../components/movie-card/movie-card.module";
import {EntrancePageComponent} from "./entrance-page.component";

@NgModule({
  declarations: [EntrancePageComponent],
  imports: [
    MovieCardModule,
    TrendingMoviesModule,
    CommonModule,
  ]
})
export class EntrancePageModule {
}
