import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GenericModalComponent} from "../../modal/generic-modal/generic-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('showHeader') showHeader = false;
  @Input('showHomeIcon') showHomeIcon = false;
  @Input('showLogoutIcon') showLogoutIcon = false;
  @Input('pageTitle') pageTitle = '';
  @ViewChild('genericModal') private modalComponent!: GenericModalComponent;

  modalStyle: string = 'modal-style-danger ';
  modalTitle: string = 'Attenzione';
  modalBody: string = 'Vuoi davvero uscire?';
  modalButtonColor: string = 'btn-danger';

  constructor() {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  async openModal() {
    return await this.modalComponent.open();
  }

  getConfirmationValue(value: any) {
    if (value == 'Save click') {
     this.logout();
    }
  }

  open() {
    this.openModal().then(r => {});
  }
}
