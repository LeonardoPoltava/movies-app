import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieInnerPageComponent} from "./movie-inner-page.component";
import {MovieDashboardComponent} from "./components/movie-dashboard/movie-dashboard.component";
import {PipesModule} from "../../../pipes/pipes.module";
import {PeopleCardModule} from "../../../people/people-card/people-card.module";
import {MovieCastLayoutComponent} from './components/movie-cast-layout/movie-cast-layout.component';

@NgModule({
  declarations: [MovieInnerPageComponent, MovieDashboardComponent, MovieCastLayoutComponent],
  imports: [
    CommonModule,
    PipesModule,
    PeopleCardModule
  ],
})
export class MovieInnerPageModule {
}
