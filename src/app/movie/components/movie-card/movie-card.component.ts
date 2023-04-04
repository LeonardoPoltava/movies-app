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
  @Input("imgSrc") public imgSrc?: string | null;
  @Input("movieName") public name!: string;
  @Input("date") public date!: string;
  @Input("movieType") public movieType!: string;
  @Input("movieJob") public movieJob?: string;
  @Input("movieCharacter") public movieCharacter?: string;
  @Input("movieId") public movieId!: number;
}
