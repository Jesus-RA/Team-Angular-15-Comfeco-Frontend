// Imports modules.
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

// Imports interfaces.
import { Group } from 'src/app/services/group/interfaces/group.interfaces';
import { User } from 'src/app/services/user/interfaces/user.interfaces';

// Imports services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { GroupService } from 'src/app/services/group/group.service';

// Imports components.
import { ModalMessageComponent } from '../modal-message/modal-message.component';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-groups-section',
  templateUrl: './groups-section.component.html',
  styleUrls: ['./groups-section.component.css']
})
export class GroupsSectionComponent implements OnInit, OnChanges {
  @Input() groups: Group[];
  groupSelectorItems: { name: string; id: string }[] = [];
  group: Group;
  private user: User;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const groups = changes.groups.currentValue as Group[];
    this.groupSelectorItems = groups.map(({ name, _id }) => ({ name, id: _id }));
    this.group = groups[0];
  }

  filter(event: MatSelectChange): void {
    const groupId = event.value as string;
    this.group = this.groups.find(group => group._id === groupId);
  }

  leaveGroup(groupId: string): void {
    // Open modal
    const message: string = `¿${ this.user.nickname }, deseas abandonar este grupo?`;
    const { banner } = this.groups.find(group => group._id === groupId);
    const dialogRef = this.openModel(message, banner, true);

    // Execute actions.
    dialogRef.beforeClosed().subscribe((data: { confirm: boolean }) => {
      if (data.confirm) {
        this.groupService.removeUserFromGroup(groupId, this.user._id).subscribe(
          res => this.successReq(res.message, groupId),
          err => this.failureReq(err.error)
        );
      }
    });
  }

  private successReq(message: string, groupId: string) {
    // Show modal.
    this.openModel(message);

    // Find index.
    const indexSelector: number = this.groupSelectorItems.findIndex(group => group.id === groupId);
    const indexGroup = this.groups.findIndex(group => group._id === groupId);
    
    // Removes groups and selectors.
    this.groupSelectorItems.splice(indexSelector, 1);
    this.groups.splice(indexGroup, 1);

    // We assign a different group
    this.group = this.groups[0];
  }

  private failureReq(error: any): void {
    this.snackbar.openFromComponent(NotificationComponent, {
      panelClass: ["bg-danger"],
      data: { icon: "error", message: error.message }
    });
  }

  private openModel(text: string, image?: string, modalConfirm?: boolean): MatDialogRef<ModalMessageComponent> {
    return this.modal.open(ModalMessageComponent, {
      disableClose: true,
      width: "400px",
      data: { text, image, modalConfirm }
    });
  }
}
