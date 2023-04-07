import {HttpClient, HttpParams,} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Genres, MovieOrSeriesType, MoviesType} from "../types/movies-type";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private readonly http: HttpClient) {
  }

  public requestTrendingMovies(time: string = 'week'): Observable<MoviesType[]> {
    return this.http.get<any>(`/trending/all/${time}`).pipe(
      map(
        response => response.results
      ),
    );
  }

  public requestMovie(type: string, movieId: string): Observable<MovieOrSeriesType> {
    return this.http.get<MovieOrSeriesType>(`/${type}/${movieId}?append_to_response=credits`).pipe(
      map(
        response => response
      )
    );
  }

  public requestMovieOrSeries(type: string, category: string, page: number = 1): Observable<MoviesType[]> {
    return this.http.get<any>(`/${type}/${category}?page=${page}`).pipe(
      map(
        response => response.results
      )
    );
  }
  public requestGenres(): Observable<Genres[]> {
    return this.http.get<any>(`/genre/movie/list`).pipe(
      map(
        response => response.genres
      )
    );
  }

  public requestDiscoverMovie(genres: number[], lte: number, gte: number, page:number): Observable<MoviesType[]> {
    let params = new HttpParams()
      .set('with_genres', genres.join(","))
      .set('release_date.gte', gte)
      .set('release_date.lte', lte)
      .set('page', page)
    ;
    return this.http.get<any>(`/discover/movie`, { params: params }).pipe(
      map(
        response => response.results
      )
    );
  }
}
