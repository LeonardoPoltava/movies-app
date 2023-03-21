import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrendingMoviesComponent} from "./trending-movies.component";
import {PipesModule} from "../../../pipes/pipes.module";
import {MovieCardModule} from "../movie-card/movie-card.module";

@NgModule({
  declarations: [TrendingMoviesComponent],
  imports: [
    CommonModule,
    PipesModule,
    MovieCardModule
  ],
  exports: [TrendingMoviesComponent]
})
export class TrendingMoviesModule {
}
