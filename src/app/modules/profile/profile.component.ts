import { Component, OnInit } from '@angular/core';
import { faUser, faMedal, faUsers, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  faUser = faUser;
  faMedal = faMedal
  faUsers = faUsers
  faCalendarWeek = faCalendarWeek

  constructor() { }

  ngOnInit(): void {
  }

}
