import {Component, Input} from '@angular/core';
import {personParticipate} from "../../../types/cast-crew-type";

@Component({
  selector: 'app-person-participate',
  templateUrl: './person-participate.component.html',
  styleUrls: ['./person-participate.component.scss']
})
export class PersonParticipateComponent {
  @Input("title") public title?: string;
  @Input("personParticipate") public personParticipate?: personParticipate[];
}
