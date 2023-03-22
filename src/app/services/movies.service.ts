import {
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {movieOrSeriesType, MoviesType} from "../types/movies/movies-type";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private readonly http: HttpClient) { }

  public requestTrendingMovies(time: string = 'week'): Observable<MoviesType[]> {
    return this.http.get<any>(`${environment.BASE_URL}/trending/all/${time}`).pipe(
      map(
        response => response.results
      ),
    );
  }

  public requestMovie(type: string, movieId: string): Observable<movieOrSeriesType> {
    return this.http.get<movieOrSeriesType>(`${environment.BASE_URL}/${type}/${movieId}?append_to_response=credits`).pipe(
      map(
        response => response
      )
    );
  }
}
