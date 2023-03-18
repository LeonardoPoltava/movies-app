import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {castCrewType} from '../types/cast-crew-type';

@Injectable({
    providedIn: 'root'
})
export class CastCrewService {

    constructor(private readonly http: HttpClient) {
    }

    public requestCast(type: string, movieId: string): Observable<castCrewType> {
        return this.http.get<any>(`/api/${type}/${movieId}/credits${environment.API_KEY}`).pipe(
            map(
                response => response
            )
        );
    }
}
