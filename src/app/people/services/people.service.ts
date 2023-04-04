import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {personType} from "../types/cast-crew-type";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private readonly http: HttpClient) {
  }

  public requestPerson(id: string): Observable<personType> {
    return this.http.get<personType>(`/person/${id}?append_to_response=movie_credits`).pipe(
      map(
        response => response
      )
    );
  }
}
