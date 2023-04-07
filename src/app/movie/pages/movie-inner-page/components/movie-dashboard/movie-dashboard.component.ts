import {Component, Input} from '@angular/core';
import {MovieOrSeriesType} from "../../../../types/movies-type";

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent {
  @Input() public movie!: MovieOrSeriesType;
}
