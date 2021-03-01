import { Component, OnInit } from '@angular/core';
import { ContentCreator } from 'src/app/interfaces/content-creator.interface';
import { Sponsor } from 'src/app/interfaces/sponsor.interface';

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
  sponsors : Array<Sponsor> = [
    {
      name: 'Fernando Herrera',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F542a8be5-03e6-43fb-80fc-fe86ca52ff82%2F1s-3xb4V_400x400.jpg?table=block&id=bdb70685-e732-41d9-b56b-8ae34db7c109&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Lara Diaz',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F997a1b13-204d-435e-9c24-fcf39d763edf%2FZ_3Q3Mwd.jpg?table=block&id=cc722be4-13a7-4443-8623-f70038097717&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Marcos Rivas',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faa2b40dd-d0b5-4990-9c70-47e5eeb87b08%2F641704.jpg?table=block&id=d22cfc55-7b57-4856-8ff1-919776cc069b&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Huawei',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F271bcdfa-6fb4-492c-91b2-c1f50208477a%2FHuawei.jpg?table=block&id=3a2bb9b6-50d3-49f4-879e-3d16cfad150d&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'TekkiTV',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4e2f337-eecb-4322-914c-9f190857b018%2Flogo.png?table=block&id=506be8cf-fe75-4c83-bea2-9e040dc715a0&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Leónidas Esteban',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff31cbb8b-7e06-4363-b370-6c6299717f7b%2Funnamed.jpg?table=block&id=ded3c3f5-8fa9-4657-97b5-c58611dd4be6&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'José Dimas Luján',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F86c9bdf2-1142-4dba-ad78-cc1c4926de75%2F7SUbPuSR_400x400.jpg?table=block&id=d711a764-737d-4780-853f-7ced5da70cbe&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Domini Code',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd90248f4-efde-4293-9a92-6ce2694258a1%2Funnamed_(5).jpg?table=block&id=20af28f9-e477-4a46-b073-74fbcb6091df&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'CodelyTV',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3b2be54-19b2-4871-b8ac-43b33aab8f02%2FFjpfg6Cu_400x400.png?table=block&id=c0d35472-7d70-4e72-b665-361098dc6b84&width=2880&userId=&cache=v2',
      link: 'https://codely.tv/'
    },
    {
      name: 'Stackly Code',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F94c923d7-a142-4c9c-89e0-355cadfd9b2c%2F124284962_114183360493972_7972504090051096032_o.png?table=block&id=a1255113-aec6-4508-b73c-9bebb3138a0b&width=2880&userId=&cache=v2',
      link: 'https://stacklycode.com/'
    },
    {
      name: 'LatamDev',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F09129ace-255e-4374-b57b-77af671486af%2F124a861f-0914-43a1-92b4-e6b7048a177f.jpg?table=block&id=67fc31be-4bc6-472c-a99e-ac505a3e0b4e&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Códigofacilito',
      image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7d576b7e-c043-40e1-b410-0db5166ca458%2Fcodigofacilito.png?table=block&id=e189316b-f233-4e6f-9b21-c7426e276a23&width=2880&userId=&cache=v2',
      link: ''
    },
    {
      name: 'Egghead',
      image: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45bfb43e-e480-46fa-b8fa-b292faff7c15/sponsor-egghead.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210301T015649Z&X-Amz-Expires=86400&X-Amz-Signature=e851e1c177c4a2126ec63e2bbec7abceb4cb85506f6ce28300bc628dc76d80c9&X-Amz-SignedHeaders=host',
      link: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
