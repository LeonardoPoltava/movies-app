import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.scss']
})
export class PersonDashboardComponent {
  @Input("personImg") public personImg?: string;
  @Input("personName") public personName?: string;
  @Input("personBirthday") public personBirthday?: string;
  @Input("personPlace") public personPlace?: string;
  @Input("personDepartment") public personDepartment?: string;
  @Input("personBiography") public personBiography?: string;
}
