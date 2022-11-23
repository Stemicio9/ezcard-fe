import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Social } from 'src/app/entities/social';

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.css'],
})
export class SocialModalComponent implements OnInit {
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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }


  closeModal() {
    this.modalService.dismissAll();
  }



  addSocial(contact: any) {
    this.userSocial.push(contact);
    var index = this.totalSocial.indexOf(contact);
    this.totalSocial.splice(index,1);


  }

  remove(element: any){
    var index = this.userSocial.indexOf(element);
    this.userSocial.splice(index,1);
    this.totalSocial.push(element);

  }


}
