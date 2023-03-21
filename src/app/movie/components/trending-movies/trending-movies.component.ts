import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {MoviesService} from "../../../services/movies.service";
import {MoviesType} from "../../../types/movies-type";

@Component({
  selector: "app-trending-movies",
  templateUrl: "./trending-movies.component.html",
  styleUrls: ["./trending-movies.component.scss"]
})
export class TrendingMoviesComponent implements OnInit {

  public trendingMovies: Observable<MoviesType[]> = this.moviesService.requestTrendingMovies();

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {

  }

}
