import {
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {movieOrSeriesType, MoviesType} from '../types/movies-type';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private readonly http: HttpClient) { }

  public requestTrendingMovies(time: string = 'week'): Observable<MoviesType[]> {
    return this.http.get<any>(`/api/trending/all/${time}`).pipe(
      map(
        response => response.results
      )
    );
  }

  public requestMovie(type: string, movieId: string): Observable<movieOrSeriesType> {
    return this.http.get<movieOrSeriesType>(`/api/${type}/${movieId}`).pipe(
      map(
        response => response
      )
    );
  }
}
