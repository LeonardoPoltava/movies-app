import {Component, Input} from '@angular/core';
import {castType} from "../../../../../people/types/cast-type";
@Component({
  selector: 'app-movie-actors',
  templateUrl: './movie-actors.component.html',
  styleUrls: ['./movie-actors.component.scss']
})
export class MovieActorsComponent {

  @Input() public castActors!: castType[];
}
