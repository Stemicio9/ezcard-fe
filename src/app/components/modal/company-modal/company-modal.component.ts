import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Social } from 'src/app/entities/social';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.css'],
})
export class CompanyModalComponent implements OnInit {
  @Input() public data: any;

  totalSocial: Social[] = [
    new Social('Instagram', 'assets/linkedin-icon.png', 'Instagram'),
    new Social('YouTube', 'assets/linkedin-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/linkedin-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/linkedin-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/linkedin-icon.png', 'Behance'),
  ];

  userSocial: Social[] = [
    new Social('Whatsapp', 'assets/whatsapp-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-icon.png', 'Facebook'),
    new Social('TikTok', 'assets/tik-tok-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-icon.png', 'Linkedin'),
  ];



  totalSocial2: Social[] = [
    new Social('Instagram', 'assets/linkedin-icon.png', 'Instagram'),
    new Social('YouTube', 'assets/linkedin-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/linkedin-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/linkedin-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/linkedin-icon.png', 'Behance'),
  ];

  userSocial2: Social[] = [
    new Social('Whatsapp', 'assets/whatsapp-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-icon.png', 'Facebook'),
    new Social('TikTok', 'assets/tik-tok-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-icon.png', 'Linkedin'),
  ];




  totalSocial3: Social[] = [
    new Social('Instagram', 'assets/linkedin-icon.png', 'Instagram'),
    new Social('YouTube', 'assets/linkedin-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/linkedin-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/linkedin-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/linkedin-icon.png', 'Behance'),
  ];

  userSocial3: Social[] = [
    new Social('Whatsapp', 'assets/whatsapp-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-icon.png', 'Facebook'),
    new Social('TikTok', 'assets/tik-tok-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-icon.png', 'Linkedin'),
  ];

  tabs = [1];
  counter = this.tabs.length + 1;
  active: any;

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter((id) => id !== toRemove, this.counter--);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalService.dismissAll();
  }

  addSocial(contact: any) {
    this.userSocial.push(contact);
    var index = this.totalSocial.indexOf(contact);
    this.totalSocial.splice(index, 1);
  }

  remove(element: any) {
    var index = this.userSocial.indexOf(element);
    this.userSocial.splice(index, 1);
    this.totalSocial.push(element);
  }



  addSocial2(contact: any) {
    this.userSocial2.push(contact);
    var index = this.totalSocial2.indexOf(contact);
    this.totalSocial2.splice(index, 1);
  }

  remove2(element: any) {
    var index = this.userSocial2.indexOf(element);
    this.userSocial2.splice(index, 1);
    this.totalSocial2.push(element);
  }



  addSocial3(contact: any) {
    this.userSocial3.push(contact);
    var index = this.totalSocial3.indexOf(contact);
    this.totalSocial3.splice(index, 1);
  }

  remove3(element: any) {
    var index = this.userSocial3.indexOf(element);
    this.userSocial3.splice(index, 1);
    this.totalSocial3.push(element);
  }
}
