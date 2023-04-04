import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleCardComponent} from "./people-card.component";
import {PipesModule} from "../../pipes/pipes.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PeopleCardComponent
  ],
    imports: [
        CommonModule,
        PipesModule,
        RouterLink
    ],
  exports: [
    PeopleCardComponent
  ],
})
export class PeopleCardModule { }
