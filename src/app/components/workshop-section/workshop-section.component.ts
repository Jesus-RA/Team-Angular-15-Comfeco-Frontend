// Imports modules.
import { Component, OnChanges, SimpleChanges } from '@angular/core';

// Imports helpers.
import { CalculateDate } from 'src/app/helpers/CalculateDate';

// Imports services.
import { WorkshopsService } from 'src/app/services/workshops/workshops.service';

@Component({
  selector: 'app-workshop-section',
  templateUrl: './workshop-section.component.html',
  styleUrls: ['./workshop-section.component.css']
})
export class WorkshopSectionComponent implements OnChanges {
  workshops: any[] = [];

  constructor(
    private workshopsService: WorkshopsService,
    private calculateDate: CalculateDate
  ) {
    this.getWorkshops();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  private getWorkshops(): void {
    this.workshopsService.list().subscribe((res: any) => {
      res.workshops.forEach(workshop => {
        const finishWorkshop: number = new Date(workshop.workshopsEndTime).getTime();
        const currentTime: number = new Date().getTime();
        const { hours, minutes } = this.calculateDate.calculate(currentTime, finishWorkshop);

        if (hours <= 0 && minutes <= 0) {
          return this.workshops.push(this.assignData(workshop, true));
        }

        this.workshops.push(this.assignData(workshop, false));
      });
    });
  }

  private assignData(data: any, status: boolean) {
    return  {
      picture: data.picture,
      title: data.title,
      instructor: {
        name: data.instructor.name,
        socialMedia: data.instructor.socialMedia
      },
      status
    };
  }
}
