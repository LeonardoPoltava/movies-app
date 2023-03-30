import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search.component";
import {PipesModule} from "../../../../../pipes/pipes.module";
import {MovieCardModule} from "../../../../components/movie-card/movie-card.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PeopleCardModule} from "../../../../../people/people-card/people-card.module";


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    PipesModule,
    MovieCardModule,
    ReactiveFormsModule,
    PeopleCardModule
  ],
  exports: [SearchComponent],
})
export class SearchModule {
}
