import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DisableUserModalComponent} from "../../modal/disable-user-modal/disable-user-modal.component";
import {ProfileService} from "../../services/profile.service";
import {ModifyUserModalComponent} from "../../modal/modify-user-modal/modify-user-modal.component";
import {StorageService} from "../../services/storage.service";
import {CreateUserModalComponent} from "../../modal/create-user-modal/create-user-modal.component";
import {QrcodeGeneratorModalComponent} from "../../modal/qrcode-generator-modal/qrcode-generator-modal.component";

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  users: any = [];

  currentUsername = '';

  constructor(private auth: AuthService, private storageService: StorageService, private profileService: ProfileService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.currentUsername = this.storageService.extractUsernameFromToken();
    this.loadUsers();
  }

  mapRoles() {
    this.users.forEach((user: any) => {
      let a = [];
      for (let i = 0; i < user.authorities.length; i++) {
        a.push(user.authorities[i].name === 'ROLE_ADMIN' ? 'ADMIN' : 'USER');
      }
      a = a.sort();
      user.role_string = a.join(', ');
    });
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

  createUser() {
    let a = this.modalService.open(CreateUserModalComponent, {
      size: 'md',
      centered: true,
      ariaLabelledBy: 'modal-basic-title',
    });
    a.componentInstance.passEntry.subscribe((userEmitted: any) => {
      this.auth.createUser(userEmitted).subscribe(() => {
        this.loadUsers();
      });
    });
  }

  showQrCodeProfile(u: any) {
    let a = this.modalService.open(QrcodeGeneratorModalComponent, {
      size: 'sm',
      centered: true,
      ariaLabelledBy: 'modal-basic-title',
    });
    a.componentInstance.data = u;
  }
}
