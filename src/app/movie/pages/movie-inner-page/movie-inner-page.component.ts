import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, Observable, switchMap} from 'rxjs';
import {MoviesService} from "../../services/movies.service";
import {MovieOrSeriesType} from "../../types/movies-type";

@Component({
  selector: 'app-movie-inner-page',
  templateUrl: './movie-inner-page.component.html',
  styleUrls: ['./movie-inner-page.component.scss']
})
export class MovieInnerPageComponent implements OnInit {

  public movie$!: Observable<MovieOrSeriesType>;

  constructor(private moviesService: MoviesService,
              private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.movie$ = combineLatest([this.route.params, this.route.url])
      .pipe(
        switchMap(([params, url]: [Params, Params]) => this.moviesService.requestMovie(url[0].path, params["id"]))
      );
  }


}
