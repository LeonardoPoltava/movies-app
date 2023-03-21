import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieInnerPageComponent} from "./movie-inner-page.component";
import {MovieDashboardComponent} from "./components/movie-dashboard/movie-dashboard.component";
import {MovieActorsComponent} from "./components/movie-actors/movie-actors.component";
import {MovieCrewComponent} from "./components/movie-crew/movie-crew.component";
import {PipesModule} from "../../../pipes/pipes.module";
@NgModule({
  declarations: [MovieInnerPageComponent, MovieDashboardComponent, MovieActorsComponent, MovieCrewComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
})
export class MovieInnerPageModule { }
