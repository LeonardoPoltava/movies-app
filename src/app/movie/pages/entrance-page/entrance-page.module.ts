import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieCardModule} from "../../components/movie-card/movie-card.module";
import {EntrancePageComponent} from "./entrance-page.component";
import {MoviesSectionModule} from "../../components/movies-section/movies-section.module";
import {MoviesComponent} from './components/movies/movies.component';
import {SearchModule} from "./components/search/search.module";

@NgModule({
  declarations: [EntrancePageComponent, MoviesComponent],
  imports: [
    MovieCardModule,
    CommonModule,
    MoviesSectionModule,
    SearchModule
  ]
})
export class EntrancePageModule {
}
