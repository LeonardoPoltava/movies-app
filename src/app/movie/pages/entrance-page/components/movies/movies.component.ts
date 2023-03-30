import { Component } from '@angular/core';
import {catchError, combineLatest, Observable, of} from "rxjs";
import {MoviesType} from "../../../../types/movies-type";
import {map} from "rxjs/operators";
import {MoviesService} from "../../../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  constructor(private moviesService: MoviesService) {
  }
  public popularMovies: Observable<MoviesType[]> = this.moviesService.requestMovieOrSeries("movie", "popular")
    .pipe(
      catchError((err) => {
        console.error("Popular movies is not loaded.");
        return of([]);
      }),
    );
  public popularTv: Observable<MoviesType[]> = this.moviesService.requestMovieOrSeries("tv", "popular").pipe(
    catchError((err) => {
      console.error("Popular TV is not loaded.");
      return of([]);
    }),
  );
  public trendingMovies$: Observable<MoviesType[]> = this.moviesService.requestTrendingMovies().pipe(
    catchError((err) => {
      console.error("Trendings is not loaded.");
      return of([]);
    }),
  );
  public upcomingMovies$: Observable<MoviesType[]> = this.moviesService.requestMovieOrSeries("movie", "upcoming")
    .pipe(
      catchError((err) => {
        console.error("Upcoming movies is not loaded.");
        return of([]);
      }),
    );
  public popular$: Observable<MoviesType[]> = combineLatest([
    this.popularMovies,
    this.popularTv,
  ]).pipe(
    map(([movies, tvs]) => {
      return [...movies, ...tvs].sort((a, b) => b.popularity - a.popularity);
    }),
  );
}
