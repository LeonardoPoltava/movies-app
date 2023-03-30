import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardComponent} from "./movie-card.component";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [MovieCardComponent],
})
export class MovieCardModule { }
