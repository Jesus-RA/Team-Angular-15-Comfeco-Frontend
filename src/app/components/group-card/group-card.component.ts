// Imports modules.
import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/services/group/interfaces/group.interfaces';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input() group: Group;
}
