import {Component, Input, OnInit} from '@angular/core';
import {MoviesType} from "../../types/movies-type";

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss']
})
export class MoviesSectionComponent implements OnInit {
  @Input("moviesTitle") public moviesTitle!: string;
  @Input("elements") public elements?: MoviesType[] | null;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
