import {Component, Input} from '@angular/core';
import {CastType} from "../types/cast-type";
import {CrewType} from "../types/crew-type";
import {SearchType} from "../../types/search-type";

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent {
  @Input("actor") public actor!: CastType | SearchType;
  @Input("crew") public crew!: CrewType | SearchType;
  @Input("search") public search?: boolean;
}
