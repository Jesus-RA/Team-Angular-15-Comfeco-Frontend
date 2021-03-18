// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports models.
import { Group } from 'src/app/services/group/interfaces/group.interfaces';

// Imports services.
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-groups-container',
  templateUrl: './groups-container.component.html',
  styleUrls: ['./groups-container.component.css']
})
export class GroupsContainerComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.list().subscribe(({ groups }) => {
      this.groups = groups;
    });
  }
}
