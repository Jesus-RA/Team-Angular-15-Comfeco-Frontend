import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  _second = 1000
  _minute = this._second * 60
  _hour = this._minute * 60
  _day = this._hour * 24

  end: any// Indica la fecha deseada
  now: any
  days: any
  hours: any
  minutes: any
  seconds: any
  source = timer(0, 1000)
  clock: any

  constructor() { }

  ngOnInit(): void {

    this.clock = this.source.subscribe( t => {
      this.now = new Date()
      this.end = new Date(`01/01/${ this.now.getFullYear() + 1 } 00:00`)
      this.showDate()
    })

  }

  showDate(){

    let distance = this.end - this.now
    this.days = Math.floor( distance / this._day )
    this.hours = Math.floor( (distance % this._day) / this._hour )
    this.minutes = Math.floor( (distance % this._hour) / this._minute )
    this.seconds = Math.floor( (distance % this._minute) / this._second )

  }

}
