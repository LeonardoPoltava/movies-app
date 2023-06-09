import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../../services/people.service";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {PersonType} from "../../types/cast-crew-type";

@Component({
  selector: 'app-people-inner-page',
  templateUrl: './people-inner-page.component.html',
  styleUrls: ['./people-inner-page.component.scss']
})
export class PeopleInnerPageComponent implements OnInit {
  public person$!: Observable<PersonType>;

  constructor(
    private readonly peopleService: PeopleService,
    private readonly route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.person$ = this.route.params.pipe(
      switchMap((params: Params) => this.peopleService.requestPerson(params['id']))
    );
  }
}
