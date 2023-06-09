import {Component, Input} from '@angular/core';
import {CrewType} from "../../../../../people/types/crew-type";

@Component({
  selector: 'app-movie-crew',
  templateUrl: './movie-crew.component.html',
  styleUrls: ['./movie-crew.component.scss']
})
export class MovieCrewComponent {
  @Input() public castCrew!: CrewType[];
}
