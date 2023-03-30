import {HttpClient,} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {movieOrSeriesType, MoviesType} from "../types/movies-type";

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

  public requestMovieOrSeries(type: string, category: string): Observable<MoviesType[]> {
    return this.http.get<any>(`/${type}/${category}`).pipe(
      map(
        response => response.results
      )
    );
  }
}
