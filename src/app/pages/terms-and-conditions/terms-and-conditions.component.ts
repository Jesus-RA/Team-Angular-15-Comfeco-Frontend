import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  company = 'Team 15 - COMFECO'
  minAge = 13
  services = [
    'Crear una cuenta por medio de correo electrónico o através de Google y Facebook.',
    'Recuperar su contraseña en caso de perderla u olvidarla.',
    'Navegar a través del sitio.',
  ]
  terms = [
    'No plagiar el contenido.',
    'No hacer fraude involucrando el nombre de la página.',
    'Crear una bomba o una nueva arma nuclear.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
