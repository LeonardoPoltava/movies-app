import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject, switchMap} from "rxjs";
import {Genres, MoviesType} from "../../types/movies-type";
import {MoviesService} from "../../services/movies.service";
import {FormControl, FormGroup} from "@angular/forms";

interface FilterGroupType {
  genres: number[],
  page: number
}

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  public defaultPage = 1;
  public allMovies: MoviesType[] = [];
  public isLoading = false;
  private moviesSubject = new BehaviorSubject<number>(this.defaultPage);
  private moviesFilteredSubject = new Subject<FilterGroupType>();
  public genres$: Observable<Genres[]> = this.moviesService.requestGenres();
  public selectedGenres: number[] = [];
  public filterForm!: FormGroup;
  public filtered = false;
  public filteredGroup:FilterGroupType = {
    genres: this.selectedGenres,
    page: 1
  }

  constructor(private readonly moviesService: MoviesService) {}

  public loadMoreMovies(): void {
    this.isLoading = true;
    if(!this.filtered) {
      this.moviesSubject.next(++this.defaultPage);
    }
    else {
      this.moviesFilteredSubject.next({genres: this.filteredGroup.genres, page: ++this.filteredGroup.page});
    }
  }

  public toggleGenre(id: number): void {
    if(this.selectedGenres.includes(id)) {
      const index = this.selectedGenres.indexOf(id);
      if (index > -1) {
        this.selectedGenres.splice(index, 1);
        if(this.selectedGenres.length < 1) {
          this.clearFilters();
        }
      }
    }
    else {
      this.selectedGenres.push(id);
    }
  }

  public loadFilteredMovies(): void {
    const lte = this.filterForm.value.release_lte;
    const gte = this.filterForm.value.release_gte;
    this.allMovies = [];
    this.isLoading = true;
    this.filtered = true;
    this.moviesFilteredSubject.pipe(
      switchMap((params: FilterGroupType) => this.moviesService.requestDiscoverMovie(this.filteredGroup.genres, lte, gte, this.filteredGroup.page)),
    ).subscribe({
      next: (movies: MoviesType[]) => {
        this.allMovies = [...this.allMovies, ...movies];
        this.isLoading = false;
      }
    })
    this.moviesFilteredSubject.next({genres: this.filteredGroup.genres, page: this.filteredGroup.page});
  }

  public clearFilters(): void {
    this.selectedGenres = [];
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
    })
    this.filterForm = new FormGroup({
      release_gte: new FormControl(''),
      release_lte: new FormControl(''),
    });
  }
}
