import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SearchService} from "../../../../services/search.service";
import {MoviesType} from "../../../../types/movies-type";
import {debounceTime, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {castCrewType} from "../../../../../people/types/cast-crew-type";
import {searchType} from "../../../../../types/search-type";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  @ViewChild("search") public search?: FormControl;
  public search$?: Observable<searchType[]>;

  constructor(private readonly searchService: SearchService) {
  }

  public ngAfterViewInit(): void {
    this.search?.valueChanges.pipe(debounceTime(200)).subscribe((val) => {
      this.search$ = this.searchService.requestSearch(val);
    })
  }
}
