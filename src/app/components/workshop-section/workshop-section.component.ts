// Imports modules.
import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

// Import interface
import { GeneralSticker } from '../general-sticker/interfaces/generaSticker.interfaces';
import { KnowledgeArea, Workshop } from 'src/app/services/workshops/interfaces/workshop.interfaces';

// Imports helpers.
import { CalculateDate } from 'src/app/helpers/CalculateDate';

// Imports services.
import { WorkshopsService } from 'src/app/services/workshops/workshops.service';
import { KnowledgeAreaService } from 'src/app/services/knowledgeArea/knowledge-area.service';

@Component({
  selector: 'app-workshop-section',
  templateUrl: './workshop-section.component.html',
  styleUrls: ['./workshop-section.component.css']
})
export class WorkshopSectionComponent {
  knowledgeAreas: KnowledgeArea[] = [];
  items: GeneralSticker[] = [];

  constructor(
    private knowledgeAreaService: KnowledgeAreaService,
    private workshopsService: WorkshopsService,
    private calculateDate: CalculateDate
  ) {
    this.getKnowledgeAreas();
    this.getWorkshops();
  }

  private getKnowledgeAreas(): void {
    this.knowledgeAreaService.list().subscribe(({ knowledgeAreas }) => {
      this.knowledgeAreas = knowledgeAreas;
    });
  }

  private getWorkshops(): void {
    this.workshopsService.list().subscribe(({ workshops }) => {
      this.assingValuesToStickers(workshops);
    });
  }

  filterByKnowledgeArea(event: MatSelectChange): void {
    const value = event.value as string;
    console.log(value);
  }

  private assingValuesToStickers(workshops: Workshop[]): void {
    workshops.forEach(workshop => {
      // Preparing variables.
      const finishWorkshop: number = new Date(workshop.workshopsEndTime).getTime();
      const currentTime: number = new Date().getTime();

      // Conversion time.
      const result = this.calculateDate.calculate(currentTime, finishWorkshop);
      const workshopStatus: boolean = result.hours <= 0 && result.minutes <= 0;

      // Assing values
      this.items.push({
        title: workshop.title,
        avatar: workshop.picture,
        link: { content: workshop.instructor.name, url: workshop.instructor.socialMedia },
        icon: workshopStatus ? "check_circle" : "more_horiz",
        color: workshopStatus ? "success" : "danger"
      });
    });
  }
}
