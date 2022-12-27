import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DisableUserModalComponent} from "../../modal/disable-user-modal/disable-user-modal.component";
import {ProfileService} from "../../services/profile.service";
import {ModifyUserModalComponent} from "../../modal/modify-user-modal/modify-user-modal.component";

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  users: any = [];

  constructor(private auth: AuthService, private profileService: ProfileService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  mapRoles() {
    this.users.forEach((user: any) => {
      let a = [];
      for (let i = 0; i < user.authorities.length; i++) {
        a.push(user.authorities[i].name === 'ROLE_ADMIN' ? 'ADMIN' : 'USER');
      }
      user.role_string = a.join(', ');
    });
  }

  action() {
    console.log("action");
  }

  loadUsers() {
    this.auth.listAllUsers().subscribe((res) => {
      this.users = res.data;
      this.mapRoles();
    });
  }

  disableUser(u: any) {
    let a = this.modalService.open(DisableUserModalComponent, {
      size: 'md',
      centered: true,
      ariaLabelledBy: 'modal-basic-title',

    });
    a.componentInstance.data = u;
    a.componentInstance.passEntry.subscribe(() => {
      this.profileService.changeUserStatus(u.id).subscribe((res) => {
        this.loadUsers();
      });
    });
  }

  modifyUser(u: any) {
    let a = this.modalService.open(ModifyUserModalComponent, {
      size: 'md',
      centered: true,
      ariaLabelledBy: 'modal-basic-title',
    });
    a.componentInstance.data = u;
    a.componentInstance.passEntry.subscribe((userEmitted: any) => {
      this.auth.updateUser(userEmitted).subscribe((res) => {
        this.loadUsers();
      });
    });

  }
}
