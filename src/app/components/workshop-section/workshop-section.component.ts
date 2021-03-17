// Imports modules.
import { Component } from '@angular/core';

// // Imports interfaces.
// import { Workshop } from 'src/app/services/workshops/interfaces/workshop.interfaces';
// import { WorkshopStiker } from '../workshop-sticker/interfaces/workshopSticker.interfaces';

// // Imports helpers.
// import { CalculateDate } from 'src/app/helpers/CalculateDate';

// Imports services.
import { WorkshopsService } from 'src/app/services/workshops/workshops.service';
import { GeneralSticker } from '../general-sticker/interfaces/generaSticker.interfaces';

@Component({
  selector: 'app-workshop-section',
  templateUrl: './workshop-section.component.html',
  styleUrls: ['./workshop-section.component.css']
})
export class WorkshopSectionComponent {
  items: GeneralSticker[] = [];

  constructor(
    private workshopsService: WorkshopsService,
    // private calculateDate: CalculateDate
  ) {
    this.getWorkshops();
  }

  private getWorkshops(): void {
    this.workshopsService.list().subscribe(res => {
      res.workshops.forEach(workshop => {
        // const finishWorkshop: number = new Date(workshop.workshopsEndTime).getTime();
        // const currentTime: number = new Date().getTime();
        // const { hours, minutes } = this.calculateDate.calculate(currentTime, finishWorkshop);

        this.items.push({
          title: workshop.title,
          avatar: workshop.picture,
          link: { content: workshop.instructor.name, url: workshop.instructor.socialMedia }
        });
        
      });
    });
  }

  // private assignData(data: Workshop, status: boolean): WorkshopStiker {
  //   return  {
  //     picture: data.picture,
  //     title: data.title,
  //     instructor: {
  //       name: data.instructor.name,
  //       socialMedia: data.instructor.socialMedia
  //     },
  //     status
  //   };
  // }
}
