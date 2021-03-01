import { Component, OnInit } from '@angular/core';
import { ContentCreator } from 'src/app/interfaces/content-creator.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  creators :Array<ContentCreator> = [
    {
      name: 'Fernando Herrera',
      brief_description: 'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F542a8be5-03e6-43fb-80fc-fe86ca52ff82%2F1s-3xb4V_400x400.jpg?table=block&id=bdb70685-e732-41d9-b56b-8ae34db7c109&width=2880&userId=&cache=v2',
      social_media:{
        twitter: 'fer',
        youtube: 'some',
        website: 'herrera'
      }
    },
    {
      name: 'Lara Diaz',
      brief_description: 'Lorem ipsum dolor sit amet.',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F997a1b13-204d-435e-9c24-fcf39d763edf%2FZ_3Q3Mwd.jpg?table=block&id=cc722be4-13a7-4443-8623-f70038097717&width=2880&userId=&cache=v2',
      social_media:{
        twitter: 'twitter',
        youtube: 's'
      }
    },
    {
      name: 'Vanessa Marely',
      brief_description: 'Lorem ipsum dolor sit amet.',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9e22d925-3ebd-45b7-ba3e-292f3c913248%2FbhiSI0Xo_400x400.jpg?table=block&id=3bf106d8-e8c9-42cb-9058-959013c8be48&width=2880&userId=&cache=v2',
      social_media:{
        website: 'web'
      }
    },
    {
      name: 'Marcos Rivas',
      brief_description: 'Lorem ipsum dolor sit amet.',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faa2b40dd-d0b5-4990-9c70-47e5eeb87b08%2F641704.jpg?table=block&id=d22cfc55-7b57-4856-8ff1-919776cc069b&width=2880&userId=&cache=v2',
      social_media:{

      }
    },
    {
      name: 'Oscar Barajas',
      brief_description: 'Lorem ipsum dolor sit amet.',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ce7ed1d-292e-48e6-9839-edf2e9b6a64f%2FAT8yXHDq_400x400.jpg?table=block&id=775b2654-01b5-424e-9251-ac95d7ffe249&width=2880&userId=&cache=v2',
      social_media:{
        twitter: 'tw',
        youtube: 'sa',
        website: 'algo'
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
