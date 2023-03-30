import {Component, Input} from '@angular/core';
import {castType} from "../types/cast-type";
import {crewType} from "../types/crew-type";
import {searchType} from "../../types/search-type";

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent {
  @Input("actor") public actor!: castType | searchType;
  @Input("crew") public crew!: crewType | searchType;
  @Input("search") public search?: boolean;
}
