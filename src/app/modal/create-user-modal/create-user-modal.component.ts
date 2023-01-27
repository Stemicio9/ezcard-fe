import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.css']
})
export class CreateUserModalComponent implements OnInit {

  public data: any = {};
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  adminRole: boolean = false;
  userRole: boolean = false;

  giftedValue: boolean = false;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  save() {
    this.data.authorities = this.manageUserRoles();
    this.data.gifted = this.giftedValue;
    if (this.data.authorities.length > 0) {
      this.passEntry.emit(this.data);
      this.closeModal();
    } else {
      alert("Seleziona almeno un ruolo");
    }
  }

  private manageUserRoles() {
    let a = [];
    if (this.adminRole) {
      a.push({name: "ROLE_ADMIN"});
    }
    if (this.userRole) {
      a.push({name: "ROLE_USER"});
    }
    return a;

  }

}
