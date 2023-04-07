import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesPageComponent} from "./movies-page.component";
import {MovieCardModule} from "../../components/movie-card/movie-card.module";
import {PipesModule} from "../../../pipes/pipes.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [MoviesPageComponent],
  imports: [
    CommonModule,
    MovieCardModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [MoviesPageComponent],
})
export class MoviesPageModule {
}
