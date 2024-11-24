import {Component, Input} from '@angular/core';
import {PersonType} from "../../../types/cast-crew-type";

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.scss']
})
export class PersonDashboardComponent {
  @Input() public person!: PersonType;
  public currentDate!: string;
  public currentDateTime!: any;
  public birthday!: Date;
  public years?: number = 0;

  constructor() {
    this.currentDate = new Date().toISOString().slice(0, 10);
    this.currentDateTime = new Date(this.currentDate).getTime();
  }
  public ngOnInit():void {
    this.birthday = new Date(this.person.birthday);
    this.years = Math.floor((this.currentDateTime - this.birthday.getTime()) / (1000 * 60 * 60 * 24) / 365.25);
  }
}
