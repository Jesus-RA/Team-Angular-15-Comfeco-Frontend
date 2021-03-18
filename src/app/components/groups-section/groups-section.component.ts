// Imports modules.
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

// Imports interfaces.
import { Group } from 'src/app/services/group/interfaces/group.interfaces';

@Component({
  selector: 'app-groups-section',
  templateUrl: './groups-section.component.html',
  styleUrls: ['./groups-section.component.css']
})
export class GroupsSectionComponent implements OnChanges {
  @Input() groups: Group[];
  groupSelectorItems: { name: string; id: string }[] = [];
  group: Group;

  ngOnChanges(changes: SimpleChanges): void {
    const groups = changes.groups.currentValue as Group[];
    
    this.groupSelectorItems = groups.map(group => ({
      name: group.name,
      id: group._id
    }));

    this.group = groups[0];
  }

  filter(event: MatSelectChange): void {
    const groupId = event.value as string;
    this.group = this.groups.find(group => group._id === groupId);
  }
}
