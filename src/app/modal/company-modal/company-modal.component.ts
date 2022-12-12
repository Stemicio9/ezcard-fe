import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Social } from 'src/app/entities/social';
import {ProfileService} from "../../services/profile.service";
import {CompanyContainer} from "../../entities/company-container";
import {socialMapLightTheme} from "../../utils/social-map";

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.css'],
})
export class CompanyModalComponent implements OnInit {
  @Input() public data: any;
  tabs: CompanyContainer[] = [];
  active: any;

  socialDropdoun: Social[] = [];

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
    this.socialDropdoun = this.defaultSocialDropdown();
    this.profileService.getCompany().subscribe((result: any) => {
      // mi rifiuto di fare la trasformazione dei dati, sono troppo disallineati
      this.tabs = result;
      if(this.tabs == undefined || this.tabs.length == 0){
        this.tabs = [];
        this.addAziendaDefault();
      }
      this.active = this.tabs[0];
    }, error => {
      console.log(error);
      if(this.tabs == undefined || this.tabs.length == 0){
        this.tabs = [];
        this.addAziendaDefault();
      }
    });
  }



  close(event: MouseEvent, toRemove: CompanyContainer) {
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
    this.tabs.push(new CompanyContainer(
     [], "Azienda"
    ));
    this.active = this.tabs[0];
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  addSocial(azienda: CompanyContainer, contact: any) {
    azienda.socials.push(contact);
  }

  remove(azienda: CompanyContainer, element: any) {
    var index = azienda.socials?.indexOf(element);
    azienda.socials?.splice(index!, 1);
  }

  formatSocialIcon(value: string | undefined) {
    if (value != undefined) {
      return socialMapLightTheme[value];
    }
    return "";
  }

  computeInputName(value: string | undefined, index: number){
    var result = "";
    result += value ?? "";
    result += index;
    return result;
  }

  save(){
     this.profileService.updateCompany(this.tabs).subscribe((body: any) => {
        this.closeModal();
      }, error => {
        console.log(error);
        console.log("errore nell'invio del profilo");
      });
  }

}
