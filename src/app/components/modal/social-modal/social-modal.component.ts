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
    new Social('Whatsapp', 'assets/whatsapp-dark-rounded-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-dark-rounded-icon.png', 'Facebook'),
    new Social('TikTok', 'assets/tiktok-dark-rounded-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-dark-rounded-icon.png', 'Linkedin'),
    new Social('Instagram', 'assets/instagram-dark-rounded-icon.png', 'Instagram'),
    new Social('YouTube', 'assets/youtube-dark-rounded-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/twitter-dark-rounded-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/pinterest-dark-rounded-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/behance-dark-rounded-icon.png', 'Behance'),
  ];

  userSocial: Social[] = [];


  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }


  closeModal() {
    this.modalService.dismissAll();
  }



  addSocial(contact: any) {
    this.userSocial.push(contact);
    const index = this.totalSocial.indexOf(contact);
    this.totalSocial.splice(index,1);
  }

  remove(element: any){
    const index = this.userSocial.indexOf(element);
    this.userSocial.splice(index,1);
    this.totalSocial.push(element);
  }


}
