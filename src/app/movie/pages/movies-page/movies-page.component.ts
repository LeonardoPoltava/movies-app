import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject, switchMap} from "rxjs";
import {Genres, MoviesType} from "../../types/movies-type";
import {MoviesService} from "../../services/movies.service";
import {FormControl, FormGroup} from "@angular/forms";

interface FilterGroupType {
  genres: number[],
  lte: number,
  gte: number,
  page: number
}

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  public defaultPage = 1;
  public allMovies: MoviesType[] = [];
  public isLoading = false;
  private moviesSubject = new BehaviorSubject<number>(this.defaultPage);
  private moviesFilteredSubject = new Subject<FilterGroupType>();
  public genres$: Observable<Genres[]> = this.moviesService.requestGenres();
  public filterForm!: FormGroup;
  public filtered = false;
  public filteredGroup:FilterGroupType = {
    genres: [],
    lte: 0,
    gte: 0,
    page: 1
  }

  constructor(private readonly moviesService: MoviesService) {}

  public loadMoreMovies(): void {
    this.isLoading = true;
    if(!this.filtered) {
      this.moviesSubject.next(++this.defaultPage);
    }
    else {
      const lte = this.filterForm.value.release_lte;
      const gte = this.filterForm.value.release_gte;
      this.moviesFilteredSubject.next({genres: this.filteredGroup.genres,lte: lte, gte: gte, page: ++this.filteredGroup.page});
    }
  }

  public toggleGenre(id: number): void {
    if(this.filteredGroup.genres.includes(id)) {
      const index = this.filteredGroup.genres.indexOf(id);
      if (index > -1) {
        this.filteredGroup.genres.splice(index, 1);
        if(this.filteredGroup.genres.length < 1) {
          this.clearFilters();
        }
      }
    }
    else {
      this.filteredGroup.genres.push(id);
    }
  }

  public loadFilteredMovies(): void {

    const lte = this.filterForm.value.release_lte;
    const gte = this.filterForm.value.release_gte;

    this.allMovies = [];
    this.isLoading = true;
    this.filtered = true;
    this.moviesFilteredSubject.next({genres: this.filteredGroup.genres, lte: lte, gte: gte, page: this.filteredGroup.page});

  }

  public clearFilters(): void {
    this.filteredGroup.genres = [];
    this.filteredGroup.page = 1;
    this.filterForm.controls['release_gte'].setValue("");
    this.filterForm.controls['release_lte'].setValue("");
    this.allMovies = [];
    this.defaultPage = 1;
    this.moviesSubject.next(this.defaultPage);
  }

  public ngOnInit(): void {
    this.moviesSubject.pipe(
      switchMap((page: number) => this.moviesService.requestMovieOrSeries("movie", "popular", page)),
    ).subscribe({
      next: (movies: MoviesType[]) => {
        this.allMovies = [...this.allMovies, ...movies];
        this.isLoading = false;
      }
    });

    this.filterForm = new FormGroup({
      release_gte: new FormControl(''),
      release_lte: new FormControl(''),
    });

    this.moviesFilteredSubject.pipe(
      switchMap((params: FilterGroupType) => this.moviesService.requestDiscoverMovie(params.genres, params.lte, params.gte, params.page)),
    ).subscribe({
      next: (movies: MoviesType[]) => {
        this.allMovies = [...this.allMovies, ...movies];
        this.isLoading = false;
      }
    });
  }

  public ngOnDestroy(){
    this.moviesFilteredSubject.unsubscribe();
  }
}
