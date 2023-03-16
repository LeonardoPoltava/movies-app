import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import {
  Subscription
} from "rxjs";
import { MoviesService } from "../../services/movies.service";
import { MoviesType } from "../../types/movies-type";

@Component({
  selector: "app-trending-movies",
  templateUrl: "./trending-movies.component.html",
  styleUrls: ["./trending-movies.component.scss"]
})
export class TrendingMoviesComponent implements OnInit, OnDestroy {

  constructor(private moviesService: MoviesService) {
  }

  public trendingMoviesSubscription: Subscription | undefined;
  public trendingMovies: MoviesType[] = [];

  ngOnInit(): void {
    this.trendingMoviesSubscription = this.moviesService.requestTrendingMovies().subscribe(result => {
      if (result.length) {
        this.trendingMovies = result;
      }
    });
  }

  public ngOnDestroy(): void {
    this.trendingMoviesSubscription?.unsubscribe();
  }

}
