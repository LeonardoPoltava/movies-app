import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleCardComponent} from "./people-card.component";
import {PipesModule} from "../../pipes/pipes.module";



@NgModule({
  declarations: [
    PeopleCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    PeopleCardComponent
  ],
})
export class PeopleCardModule { }
