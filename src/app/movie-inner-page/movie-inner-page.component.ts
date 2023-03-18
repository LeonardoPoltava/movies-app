import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Params,
    Router
} from '@angular/router';
import {Subscription} from 'rxjs';
import {
    filter,
    switchMap,
    take,
    tap
} from 'rxjs/operators';
import {MoviesService} from '../services/movies.service';
import {movieOrSeriesType} from '../types/movies-type';
import {castCrewType} from '../types/cast-crew-type';
import {CastCrewService} from '../services/cast-crew.service';

@Component({
    selector: 'app-movie-inner-page',
    templateUrl: './movie-inner-page.component.html',
    styleUrls: ['./movie-inner-page.component.scss']
})
export class MovieInnerPageComponent implements OnInit, OnDestroy {

    constructor(private moviesService: MoviesService,
                private castCrewService: CastCrewService,
                private readonly router: Router,
                private readonly route: ActivatedRoute
    ) {
        this.router.events
            .pipe(
                filter((e): e is NavigationEnd => e instanceof NavigationEnd),
                switchMap(event =>
                    this.route.params.pipe(
                        tap((params: Params) => {
                            this.paramsId = params.id;
                        }),
                        take(1)
                    )
                )
            )
            .subscribe();

        this.router.events
            .pipe(
                filter((e): e is NavigationEnd => e instanceof NavigationEnd),
                switchMap(event =>
                    this.route.url.pipe(
                        tap((url: any) => {
                            this.type = url[0].path;
                        }),
                        take(1)
                    )
                )
            )
            .subscribe();
    }

    public movieSubscription: Subscription | undefined;
    public movie: movieOrSeriesType | undefined;

    public castCrewSubscription: Subscription | undefined;
    public castCrew: castCrewType | undefined;
    public type: any;

    private paramsId!: string;

    ngOnInit(): void {

        this.movieSubscription = this.moviesService.requestMovie(this.type, this.paramsId).subscribe(result => {
            this.movie = result;
        });

        this.castCrewSubscription = this.castCrewService.requestCast(this.type, this.paramsId).subscribe(result => {
            this.castCrew = result;
        });

    }

    public ngOnDestroy(): void {
        this.movieSubscription?.unsubscribe();
    }

}
