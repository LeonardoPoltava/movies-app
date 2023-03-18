import {Component, Input} from '@angular/core';
import {castCrewType} from '../../../types/cast-crew-type';

@Component({
    selector: 'app-movie-actors',
    templateUrl: './movie-actors.component.html',
    styleUrls: ['./movie-actors.component.scss']
})
export class MovieActorsComponent {

    @Input() public castCrew!: castCrewType;
}
