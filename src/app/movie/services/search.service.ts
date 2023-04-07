import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {MoviesType} from "../types/movies-type";
import {Observable} from "rxjs";
import {CastCrewType} from "../../people/types/cast-crew-type";
import {SearchType} from "../../types/search-type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private readonly http: HttpClient) {}

  public requestSearch(query: string): Observable<SearchType[]> {
    return this.http.get<{ results: SearchType[] }>(`/search/multi?query=${query}`).pipe(
      map(response => response.results),
    )
  }
}
