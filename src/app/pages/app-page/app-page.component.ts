// Imports modules.
import { Component, OnInit } from '@angular/core';
import { CommunitiesService } from 'src/app/services/communities/communities.service';
import { Community } from 'src/app/services/communities/interfaces/community.interfaces';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {
  communities: Community[] = [];

  constructor(private communitiesService: CommunitiesService) {}

  ngOnInit(): void {
    this.communitiesService.list().subscribe(res => {
      this.communities = res.communities;
    });
  }
}
