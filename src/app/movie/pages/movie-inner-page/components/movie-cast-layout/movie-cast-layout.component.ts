import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-cast-layout',
  templateUrl: './movie-cast-layout.component.html',
  styleUrls: ['./movie-cast-layout.component.scss']
})
export class MovieCastLayoutComponent {
  @Input() public castTitle!: string;
}
