// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports models.
import { Group } from 'src/app/services/group/interfaces/group.interfaces';

// Imports services.
import { GroupService } from 'src/app/services/group/group.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-groups-container',
  templateUrl: './groups-container.component.html',
  styleUrls: ['./groups-container.component.css']
})
export class GroupsContainerComponent implements OnInit {
  languages: Set<string>;
  groups: Group[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.list().subscribe(({ groups }) => {
      const items = groups.map(group => group.tag.text);
      this.languages = new Set(items);
      this.groups = groups;
    });
  }

  filter(event: MatSelectChange): void {
    const elements = document.querySelectorAll("#group-card") as NodeListOf<HTMLElement>;
    elements.forEach(element => {
      const word: string = element.className.toLocaleLowerCase();
      let keyword = event.value as string;
      const status: boolean = word.indexOf(keyword.toLocaleLowerCase()) !== -1 ? true : false;
      this.conditionRendering(element.parentElement, status);
    });
  }

  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    const elements = document.querySelectorAll("#group-card") as NodeListOf<HTMLElement>;

    elements.forEach(element => {
      const keyword: string = input.value.toLocaleLowerCase();
      const word: string = element.textContent.toLocaleLowerCase();
      const status: boolean = word.indexOf(keyword) !== -1 ? true : false;
      this.conditionRendering(element.parentElement, status);
    });
  }

  private conditionRendering(element: HTMLElement, status: boolean): void {
    if (status) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
