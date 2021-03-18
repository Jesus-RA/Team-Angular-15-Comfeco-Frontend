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

  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    const elements = document.querySelectorAll("#group-card") as NodeListOf<HTMLElement>;

    elements.forEach(element => {
      const keyword: string = input.value.toLocaleLowerCase();
      const word: string = element.textContent.toLocaleLowerCase();
      
      if (word.indexOf(keyword) !== -1) {
        element.parentElement.style.display = "block";
      } else {
        element.parentElement.style.display = "none";
      }
    });
  }
}
