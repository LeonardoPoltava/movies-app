import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {combineLatest, Observable, switchMap} from 'rxjs';
import {MoviesService} from "../../services/movies.service";
import {movieOrSeriesType} from "../../types/movies-type";

@Component({
  selector: 'app-movie-inner-page',
  templateUrl: './movie-inner-page.component.html',
  styleUrls: ['./movie-inner-page.component.scss']
})
export class MovieInnerPageComponent implements OnInit {

  public movie$!: Observable<movieOrSeriesType>;

  constructor(private moviesService: MoviesService,
              private readonly router: Router,
              private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    combineLatest([this.route.params, this.route.url])
      .pipe(
        switchMap(([params, url]: [Params, Params]) => this.movie$ = this.moviesService.requestMovie(url[0].path, params["id"]))
      ).subscribe();
  }


}
