import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleInnerPageComponent} from "./people-inner-page.component";
import {PipesModule} from "../../../pipes/pipes.module";
import {MovieCardModule} from "../../../movie/components/movie-card/movie-card.module";
import { PersonDashboardComponent } from './person-dashboard/person-dashboard.component';
import { PersonParticipateComponent } from './person-participate/person-participate.component';
@NgModule({
  declarations: [PeopleInnerPageComponent, PersonDashboardComponent, PersonParticipateComponent],
  imports: [
    CommonModule,
    PipesModule,
    MovieCardModule
  ],
  exports: [PeopleInnerPageComponent]
})
export class PeopleInnerPageModule { }
