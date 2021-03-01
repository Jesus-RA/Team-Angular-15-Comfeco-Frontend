import { Component, Input, OnInit } from '@angular/core';
import { ContentCreator } from 'src/app/interfaces/content-creator.interface';

@Component({
  selector: 'app-content-creator-card',
  templateUrl: './content-creator-card.component.html',
  styleUrls: ['./content-creator-card.component.scss']
})
export class ContentCreatorCardComponent implements OnInit {

  @Input() content_creator : ContentCreator

  constructor() {  }

  ngOnInit(): void {
  }

  get hasSocialMedia():boolean{
    return Object.values(this.content_creator.social_media).length > 0
  }

}
