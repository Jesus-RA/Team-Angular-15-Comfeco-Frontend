// Imports modules
import { Component, Input, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

// Imports interfaces.
import { Event } from 'src/app/services/events/interfaces/events.interfaces';
import { User } from 'src/app/services/user/interfaces/user.interfaces';

// Imports services
import { EventService } from 'src/app/services/events/event.service';
import { AuthService } from 'src/app/services/auth/auth.service';

// Imports components.
import { NotificationComponent } from '../notification/notification.component';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnChanges {
  @Output() leave = new EventEmitter<{ eventId: string }>();

  @Input() event: Event;

  private user: User;
  isParticipating: boolean = false;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private modal: MatDialog
  ) {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const event = changes.event.currentValue as Event;
    const result: string = event.members.find(member => this.user._id === member);
    this.isParticipating = !!result;
  }

  participate(eventId: string, status: boolean): void {
    status ? this.leaveEvent(eventId) : this.joinEvent(eventId);
  }

  private joinEvent(eventId: string): void {
    this.eventService.addUserToEvent(eventId, this.user._id).subscribe(
      res => this.successJoinReq(res.message),
      err => this.failureJoinReq(err.error)
    );
  }

  private successJoinReq(message: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      panelClass: ["bg-success"],
      data: { icon: "check_circle", message }
    });
  }

  private failureJoinReq(error: any): void {
    this.modal.open(ModalMessageComponent, {
      width: "400px",
      disableClose: true,
      data: { text: error.message, image: this.event.banner }
    });
  }

  private leaveEvent(eventId: string): void {
    const dialogRef = this.modal.open(ModalMessageComponent, {
      disableClose: true,
      width: "400px",
      data: {
        text: `${ this.user.nickname }, quedaras baneado del evento, ¿Deseas continuar?`,
        image: this.event.banner,
        modalConfirm: true
      }
    });

    dialogRef.beforeClosed().subscribe((data: { confirm: boolean }) => {
      if (data.confirm) {
        this.eventService.removeUserFromEvent(eventId, this.user._id).subscribe(
          res => this.successLeaveEventReq(res.message)
        );
      }
    });
  }

  private successLeaveEventReq(message: string): void {
    this.leave.emit({ eventId: this.event._id });
    
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      panelClass: ["bg-danger"],
      data: { icon: "check_circle", message }
    });
  }
}
