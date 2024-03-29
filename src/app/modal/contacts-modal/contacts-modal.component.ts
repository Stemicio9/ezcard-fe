import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Contact} from 'src/app/entities/contact';
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.component.html',
  styleUrls: ['./contacts-modal.component.css']
})
export class ContactsModalComponent implements OnInit {

  @Input() public data: any;


  totalContact: Contact[] = [
  ];

  regexPhone = new RegExp("^[0-9]{9,11}$");
  regexEmail = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
  regexUrl = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");

  dropdownContact: Contact[] = [
    new Contact('', '/assets/phone-dark-rounded-icon.png', 'Telefono'),
    new Contact('', '/assets/email-dark-rounded-icon.png', 'Email'),
    new Contact('', '/assets/internet-dark-rounded-icon.png', 'SitoWeb'),
  ];


  constructor(private modalService: NgbModal, private profileService: ProfileService) { }

  ngOnInit(): void {
    // per ora adattiamo i dati allo schifo che già esiste, quindi facciamo il match
    // dei nomi dei social con i nomi contenuti nella lista totalSocial
    this.profileService.getContacts().subscribe((result: any) => {
      if(result != undefined){
        this.fromContactContainerToContact(result);
      }
    });
  }

  closeModal() {
    this.profileService.updateContacts(this.fromContactToContactContainer()).subscribe((result: any) => {
      this.modalService.dismissAll();
    }, error => {
      // GESTIRE UN EVENTUALE ERRORE DI UPLOAD
      this.modalService.dismissAll();
    });
    this.modalService.dismissAll();
  }


  addContact(contact: any) {
    this.totalContact.push(contact);
  }

  remove(element: any){
    var index = this.totalContact.indexOf(element);
    this.totalContact.splice(index,1);
  }


  fromContactToContactContainer(){
    var result : any [] = [];
    for(let element of this.totalContact){
      result.push({name: element.placeholder, value: element.name});
    }
    return result;
  }

  fromContactContainerToContact(socialResult: any[]){
    for(let element of socialResult){
      this.totalContact.push(new Contact(element.value, this.calculateIconPath(element.name), element.name));
    }
  }

  calculateIconPath(other: string) : string {
    for(let element of this.dropdownContact){
      if(element.placeholder?.toLowerCase() == other.toLowerCase()){
        return element.iconPath ?? "";
      }
    }
    // todo
    // this part should return a default icon
    return "";
  }

  calculateNameAttribute(element: any, index: number){
    if(element.name == undefined){
      return "Contact " + index;
    }
    if(element.name.length == 0){
      return "Contact " + index;
    }
    return element.name;
  }

  validateString(element: Contact) {
    if(element.name == undefined){
      return false;
    }
    if(element.name.length == 0){
      return false;
    }
    switch (element.placeholder) {
      case "Telefono":
        return true;
        //return this.regexPhone.test(element.name);
      case "Email":
        return this.regexEmail.test(element.name);
      case "SitoWeb":
        return this.regexUrl.test(element.name);
      default:
        return false;
    }
  }



}
