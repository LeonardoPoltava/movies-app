import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesSectionComponent} from "./movies-section.component";
import {PipesModule} from "../../../pipes/pipes.module";
import {MovieCardModule} from "../movie-card/movie-card.module";

@NgModule({
  declarations: [MoviesSectionComponent],
  imports: [
    CommonModule,
    PipesModule,
    MovieCardModule
  ],
  exports: [MoviesSectionComponent],
})
export class MoviesSectionModule {
}
