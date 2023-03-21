import {
  Component,
  Input,
} from "@angular/core";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input("imgSrc") public imgSrc!: string;
  @Input("movieName") public name!: string;
  @Input("date") public date!: string;
  @Input("movieType") public movieType!: string;
  @Input("movieId") public movieId!: number;
}
