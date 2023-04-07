import {Component, Input} from '@angular/core';

interface PersonType {
  id: number;
  name: string;
  profile_path: string;
}

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent {
  @Input("person") public person!: Partial<PersonType>;
}
