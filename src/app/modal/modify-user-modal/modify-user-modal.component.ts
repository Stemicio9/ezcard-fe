import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modify-user-modal',
  templateUrl: './modify-user-modal.component.html',
  styleUrls: ['./modify-user-modal.component.css']
})
export class ModifyUserModalComponent implements OnInit {
  @Input() public data: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  adminRole: boolean = false;
  userRole: boolean = false;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.mapRoles();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  save() {
    this.data.authorities = this.manageUserRoles();
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

  private mapRoles() {
    let c = this.data.role_string.trim().split(", ");
    for (let i = 0; i < c.length; i++) {
      if (c[i] == "ADMIN") {
        this.adminRole = true;
      } else if (c[i] == "USER") {
        this.userRole = true;
      }
    }
  }
}
