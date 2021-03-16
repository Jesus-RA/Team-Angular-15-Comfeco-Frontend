// Imports modules.
import { Component } from '@angular/core';

// Imports services.
import { WorkshopsService } from 'src/app/services/workshops/workshops.service';

@Component({
  selector: 'app-workshop-section',
  templateUrl: './workshop-section.component.html',
  styleUrls: ['./workshop-section.component.css']
})
export class WorkshopSectionComponent {
  workshops: any[] = [];

  constructor(private workshopsService: WorkshopsService) {
    this.workshopsService.list().subscribe((res: any) => {
      this.workshops = res.workshops;
    });
  }
}
