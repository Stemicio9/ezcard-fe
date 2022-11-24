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
    new Contact('Telefono', 'assets/phone-dark-rounded-icon.png', 'Telefono'),
    new Contact('Email', 'assets/email-dark-rounded-icon.png', 'Email'),
    new Contact('SitoWeb', 'assets/internet-dark-rounded-icon.png', 'SitoWeb'),
  ];

  dropdownContact: Contact[] = [
    new Contact('Telefono', 'assets/phone-dark-rounded-icon.png', 'Telefono'),
    new Contact('Email', 'assets/email-dark-rounded-icon.png', 'Email'),
    new Contact('SitoWeb', 'assets/internet-dark-rounded-icon.png', 'SitoWeb'),
  ];


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }


  addContact(contact: any) {
    this.totalContact.push(contact);
  }

  remove(element: any){
    var index = this.totalContact.indexOf(element);
    this.totalContact.splice(index,1);
  }

}
