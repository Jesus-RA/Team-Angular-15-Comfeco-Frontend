// Imports modules.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-creators-content',
  templateUrl: './carousel-creators-content.component.html',
  styleUrls: ['./carousel-creators-content.component.css']
})
export class CarouselCreatorsContentComponent {
  creatorsContent = [
    {
      name: "Bezael Perez",
      avatar: "https://pbs.twimg.com/profile_images/1275143505288089600/3YCxeMFu.jpg"
    },
    {
      name: "Nicolas Schurmann",
      avatar: "https://s.gravatar.com/avatar/a9484e5077527b9d4d8bdc7c272fc16d?size=496&default=retro"
    },
    {
      name: "Diego Montoya",
      avatar: "https://www.eafit.edu.co/thetransmediaearthconference/PublishingImages/Paginas/default/diego-montoya.png"
    },
    {
      name: "Sacha Lifszync",
      avatar: "https://avatars.githubusercontent.com/u/1213542?s=400&v=4"
    }
  ];
}
