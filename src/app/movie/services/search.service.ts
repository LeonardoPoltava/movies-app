import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {MoviesType} from "../types/movies-type";
import {Observable} from "rxjs";
import {castCrewType} from "../../people/types/cast-crew-type";
import {searchType} from "../../types/search-type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private readonly http: HttpClient) {}

  public requestSearch(query: string): Observable<searchType[]> {
    return this.http.get<{ results: searchType[] }>(`/search/multi?query=${query}`).pipe(
      map(response => response.results),
    )
  }
}
