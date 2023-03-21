import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {movieOrSeriesType} from '../../../types/movies-type';
import {castCrewType} from '../../../types/cast-crew-type';
import {CastCrewService} from '../../../services/cast-crew.service';
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-movie-inner-page',
  templateUrl: './movie-inner-page.component.html',
  styleUrls: ['./movie-inner-page.component.scss']
})
export class MovieInnerPageComponent implements OnInit {

  public movie$!: Observable<movieOrSeriesType>;
  public castCrew$!: Observable<castCrewType>;
  public type: any;
  private paramsId!: string;

  constructor(private moviesService: MoviesService,
              private castCrewService: CastCrewService,
              private readonly router: Router,
              private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    combineLatest([this.route.params, this.route.url])
      .pipe(
        tap(([params, url]: [Params, Params]) => ([this.paramsId = params["id"], this.type = url[0].path])),
      ).subscribe();

    this.movie$ = this.moviesService.requestMovie(this.type, this.paramsId);

    this.castCrew$ = this.castCrewService.requestCast(this.type, this.paramsId);

  }


}
