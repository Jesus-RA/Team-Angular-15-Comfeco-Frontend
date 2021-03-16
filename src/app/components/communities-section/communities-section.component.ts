// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports interfaces.
import { Community } from 'src/app/services/communities/interfaces/community.interfaces';

// Imports services.
import { CommunitiesService } from 'src/app/services/communities/communities.service';

@Component({
  selector: 'app-communities-section',
  templateUrl: './communities-section.component.html',
  styleUrls: ['./communities-section.component.css']
})
export class CommunitiesSectionComponent implements OnInit {
  communities: Community[] = [];

  constructor(private communitiesService: CommunitiesService) {}

  ngOnInit(): void {
    this.communitiesService.list().subscribe(res => this.communities = res.communities);
  }
}
