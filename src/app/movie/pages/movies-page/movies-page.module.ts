import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesPageComponent} from "./movies-page.component";
import {MovieCardModule} from "../../components/movie-card/movie-card.module";
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [MoviesPageComponent],
  imports: [
    CommonModule,
    MovieCardModule,
    PipesModule
  ],
  exports: [MoviesPageComponent],
})
export class MoviesPageModule {
}
