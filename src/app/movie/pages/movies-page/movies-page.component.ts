import {Component, OnInit} from '@angular/core';
import {Observable, Subject, switchMap} from "rxjs";
import {Genres, MoviesType} from "../../types/movies-type";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  public defaultPage = 1;
  public allMovies: MoviesType[] = [];
  public filteredMovies: MoviesType[] = [];
  public isLoading = false;
  private moviesSubject = new Subject<number>();
  private moviesFilteredSubject = new Subject<string>();
  public genres$: Observable<Genres[]> = this.moviesService.requestGenres();
  private queryParam = "";
  public filteredArray: any = [];
  private activeFilters: string[] = []

  constructor(private readonly moviesService: MoviesService) {}

  public loadMoreMovies() {
    this.isLoading = true;
    this.moviesSubject.next(++this.defaultPage);
  }

  public makeQueryParams(id: number) {
    if(this.filteredArray.includes(id)) {
      const index = this.filteredArray.indexOf(id);
      if (index > -1) {
        this.filteredArray.splice(index, 1);
      }
      if(this.filteredArray.length === 0) {
        const index = this.activeFilters.indexOf("Genre");
        this.activeFilters.splice(index, 1);
      }
    }
    else {
      this.filteredArray.push(id);
      this.queryParam += id;
      if(!this.activeFilters.includes("Genre")) {
        this.activeFilters.push("Genre");
      }
    }
  }

  public loadFilteredMovies() {
    this.allMovies = [];
    this.isLoading = true;
    this.moviesFilteredSubject.pipe(
      switchMap((params: string) => this.moviesService.requestDiscoverMovie(params)),
    ).subscribe({
      next: (movies: MoviesType[]) => {
        this.allMovies = [...this.allMovies, ...movies];
        this.isLoading = false;
      }
    })
    this.moviesFilteredSubject.next(this.queryParam);
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
    this.moviesSubject.next(this.defaultPage);
  }
}
