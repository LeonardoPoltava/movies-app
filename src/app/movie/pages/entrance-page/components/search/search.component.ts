import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";
import {debounceTime, Observable, switchMap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {searchType} from "../../../../../types/search-type";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search$?: Observable<searchType[]>;
  public searchForm!: FormGroup;

  constructor(private readonly searchService: SearchService) {
  }

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchInput: new FormControl(''),
    });

    this.search$ = this.searchForm.controls["searchInput"].valueChanges.pipe(
      debounceTime(200),
      switchMap((val: string) => this.searchService.requestSearch(val)),
    );

  }
}
