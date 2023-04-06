import {HttpClient,} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Genres, movieOrSeriesType, MoviesType} from "../types/movies-type";

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

  public requestMovie(type: string, movieId: string): Observable<movieOrSeriesType> {
    return this.http.get<movieOrSeriesType>(`/${type}/${movieId}?append_to_response=credits`).pipe(
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

  public requestDiscoverMovie(queryParams: string): Observable<MoviesType[]> {
    return this.http.get<any>(`/discover/movie?${queryParams}`).pipe(
      map(
        response => response.results
      )
    );
  }
}
