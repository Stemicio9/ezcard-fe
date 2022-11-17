import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { Contact } from 'src/app/entities/contact';

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.component.html',
  styleUrls: ['./contacts-modal.component.css']
})
export class ContactsModalComponent implements OnInit {

  @Input() public data: any;


  totalContact: Contact[] = [
    new Contact('Telefono', 'assets/phone-icon.png', 'Telefono'),
    new Contact('Email', 'assets/email-message-icon.png', 'Email'),
    new Contact('SitoWeb', 'assets/internet-icon.png', 'SitoWeb'),
  ];

  dropdownContact: Contact[] = [
    new Contact('Telefono', 'assets/phone-icon.png', 'Telefono'),
    new Contact('Email', 'assets/email-message-icon.png', 'Email'),
    new Contact('SitoWeb', 'assets/internet-icon.png', 'SitoWeb'),
  ];



  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }


  addContact(contact: any) {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <div class="col-md-12">
      <div class="input-group mb-md-5 mb-3">
        <img style="margin-right: 0.5rem" class="icon-size" src="${contact.iconPath}">
        <input placeholder="${contact.placeholder}" class="form-control" style="border-radius: 0.25rem;"/>
      </div>
    </div>
    `;
    document.querySelector('.showInputField')?.appendChild(row);
    document.querySelector('.removeInputField')?.removeChild(row);

  }

}
