// Imports modules.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  days: string = "";
  hours: string = "";
  minutes: string = "";
  seconds: string = "";

  ngOnInit(): void {
    this.countdown();
  }

  private countdown(): void {
    setInterval(() => {
      const currentTime: number = new Date().getTime();
      const eventTime: number = new Date(2022, 0, 1).getTime();
      const timeLeft: number = eventTime - currentTime;
      this.conversion(timeLeft);
    }, 1000);
  }

  private conversion(timeLeft: number): void {
    let seconds: number = Math.floor(timeLeft / 1000);
    let minutes: number = Math.floor(seconds / 60);
    let hours: number = Math.floor(minutes / 60);
    let days: number = Math.floor(hours / 24);

    hours %= 60;
    minutes %= 60;
    seconds %= 60;
    
    this.days = this.parseData(days)
    this.hours = this.parseData(hours);
    this.minutes = this.parseData(minutes);
    this.seconds = this.parseData(seconds);
  }

  private parseData(number: number): string {
    return number < 10  ? `0${ number }` : `${ number }`;
  }
}
