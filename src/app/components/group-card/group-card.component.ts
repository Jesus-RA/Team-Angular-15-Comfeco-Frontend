// Imports modules.
import { MatSnackBar } from "@angular/material/snack-bar";
import { Component, Input, OnInit } from '@angular/core';

// Imports interfaces.
import { Group } from 'src/app/services/group/interfaces/group.interfaces';
import { User } from 'src/app/services/user/interfaces/user.interfaces';

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { GroupService } from 'src/app/services/group/group.service';

// Imports components.
import { NotificationComponent } from "../notification/notification.component";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  @Input() group: Group;
  private user: User;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  joinGroup(groupId: string): void {
    this.groupService.addMemberToGroup(groupId, this.user._id).subscribe(
      res => this.successReq(res.message),
      err => this.failureReq(err.error)
    );
  }

  private successReq(message: string): void {
    this.openNotification(message, "success", "check_circle");
  }

  private failureReq(error: any) {
    this.openNotification(error.message, "danger", "error");
  }

  private openNotification(message: string, color: string, icon: string): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      duration: 3000,
      panelClass: [`bg-${ color }`],
      data: { icon, message }
    });
  }
}
