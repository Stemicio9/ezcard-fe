import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Social } from 'src/app/entities/social';
import { StatoAzienda } from 'src/app/entities/stato-azienda';
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.css'],
})
export class CompanyModalComponent implements OnInit {
  @Input() public data: any;
  tabs: StatoAzienda[] = [];
  active: any;


  defaultSocialDropdown(){
    return [
      new Social('Instagram', 'assets/instagram-dark-rounded-icon.png', 'Instagram'),
      new Social('YouTube', 'assets/youtube-dark-rounded-icon.png', 'YouTube'),
      new Social('Twitter', 'assets/twitter-dark-rounded-icon.png', 'Twitter'),
      new Social('Pinterest', 'assets/pinterest-dark-rounded-icon.png', 'Pinterest'),
      new Social('Behance', 'assets/behance-dark-rounded-icon.png', 'Behance'),
      new Social('Whatsapp', 'assets/whatsapp-dark-rounded-icon.png', 'Whatsapp'),
      new Social('Facebook', 'assets/facebook-dark-rounded-icon.png', 'Facebook'),
      new Social('TikTok', 'assets/tiktok-dark-rounded-icon.png', 'TikTok'),
      new Social('Linkedin', 'assets/linkedin-dark-rounded-icon.png', 'Linkedin'),
    ];
   }


  constructor(private modalService: NgbModal, private profileService: ProfileService) {}

  ngOnInit(): void {

    this.profileService.getCompany().subscribe((result: any) => {
      // mi rifiuto di fare la trasformazione dei dati, sono troppo disallineati
    }, error => {
      console.log(error);
    });

    // @TODO if azienda tabs is empty after rest call to backend
    // Insert an empty default azienda
    if(this.tabs.length == 0){
      this.addAziendaDefault();
    }
  }



  close(event: MouseEvent, toRemove: StatoAzienda) {
    var number = this.tabs.indexOf(toRemove);
    this.tabs.splice(number,1);
    this.active = this.tabs[0];
 //   this.tabs = this.tabs.filter((id) => id !== toRemove, this.counter--);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.addAziendaDefault();
    event.preventDefault();
  }

  addAziendaDefault(){
    this.tabs.push(new StatoAzienda(
      this.defaultSocialDropdown(),[],"Azienda"
    ));
  }



  closeModal() {
    this.modalService.dismissAll();
  }

  addSocial(azienda: StatoAzienda, contact: any) {
    azienda.userSocial?.push(contact);
    var index = azienda?.dropdownSocial?.indexOf(contact);
    azienda.dropdownSocial?.splice(index!, 1);
  }

  remove(azienda: StatoAzienda, element: any) {
    var index = azienda.userSocial?.indexOf(element);
    azienda.userSocial?.splice(index!, 1);
    azienda.dropdownSocial?.push(element);
  }


}
