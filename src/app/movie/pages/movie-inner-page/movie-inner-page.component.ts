import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MoviesService} from "../../../services/movies.service";
import {movieOrSeriesType} from "../../../types/movies/movies-type";

@Component({
  selector: 'app-movie-inner-page',
  templateUrl: './movie-inner-page.component.html',
  styleUrls: ['./movie-inner-page.component.scss']
})
export class MovieInnerPageComponent implements OnInit {

  public movie$!: Observable<movieOrSeriesType>;
  public type!: string;
  private paramsId!: string;

  constructor(private moviesService: MoviesService,
              private readonly router: Router,
              private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    combineLatest([this.route.params, this.route.url])
      .pipe(
        tap(([params, url]: [Params, Params]) => ([this.paramsId = params["id"], this.type = url[0].path])),
      ).subscribe();

    this.movie$ = this.moviesService.requestMovie(this.type, this.paramsId);
  }


}
