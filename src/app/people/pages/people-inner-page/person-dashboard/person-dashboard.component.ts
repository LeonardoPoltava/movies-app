import {Component, Input} from '@angular/core';
import {PersonType} from "../../../types/cast-crew-type";

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.scss']
})
export class PersonDashboardComponent {
  @Input() public person!: PersonType;
}
