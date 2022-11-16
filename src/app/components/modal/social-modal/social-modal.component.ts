import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.css']
})
export class SocialModalComponent implements OnInit {

  socialIcons: string[] = ["assets/facebook-icon.png","assets/tik-tok-icon.png","assets/linkedin-icon.png", "assets/whatsapp-icon.png"];
  socialStrings: string[] = ["Facebook", "Tik Tok", "Linkedin", "Whatsapp"];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }

}
