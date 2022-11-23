import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProfileModalComponent} from "../modal/profile-modal/profile-modal.component";
import {ContactsModalComponent} from "../modal/contacts-modal/contacts-modal.component";
import {SocialModalComponent} from "../modal/social-modal/social-modal.component";
import {CompanyModalComponent} from "../modal/company-modal/company-modal.component";
import { PresentationModalComponent } from '../modal/presentation-modal/presentation-modal.component';
import { GalleryModalComponent } from '../modal/gallery-modal/gallery-modal.component';
import { PartnerModalComponent } from '../modal/partner-modal/partner-modal.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titlesFirstSection: string[] = ['Profilo', 'Social', 'Contatti', 'Azienda', 'Presentazione', 'Galleria', 'Partner'];
  titlesSecondSection: string[] = ['Statistiche', 'Impostazioni', 'Profilo uetnte' ]
  descriptionsFirstSection: string[] = ['Nome, Compagnia, ecc.',  'Linkedin, Facebook, Instagram','Telefono, Mail, Sito web', 'Sito web, Telefono, Indirizzo', 'Carica i tuoi file', 'Carica i tuoi progetti', 'Carica i tuoi partner'];
  descriptionsSecondSection: string[] = ['Visite, Click, ecc.', 'Email, Lingua, ecc.'];
  imageLinksFirstSection: string[] = ["assets/user-icon.png","assets/share-icon.png","assets/email-icon.png","assets/azienda-icon.png", "assets/azienda-icon.png", "assets/azienda-icon.png", "assets/azienda-icon.png"];
  imageLinksSecondSection: string[] = ["assets/stats-icon.png","assets/settings-icon.png","assets/user-icon.png" ];
  idModalList: any[] = [ProfileModalComponent, SocialModalComponent, ContactsModalComponent, CompanyModalComponent, PresentationModalComponent, GalleryModalComponent, PartnerModalComponent, ProfileComponent];
  routerLinkList: string[] = ['/stats', '/settings', '/profile/:id'];
  closeResult = '';

  // true = light theme, false = dark theme
  theme_style = true;

  light_theme_background_class = "";
  dark_theme_background_class = "col-md-8 main-section-style black-background";

  constructor(private modalService: NgbModal) { }

  openGenericModal(content:any){
    const modalRef = this.modalService.open(content, {size: 'lg',centered:true, ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.data = ''; //TODO here we can pass data to the modal

  }

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  ngOnInit(): void {

  }

  formatDate() {
    let datePicker = document.getElementById("dateOfBirth");
    console.log(datePicker);
    datePicker?.setAttribute("format", "dd/MM/yyyy");
  }


   getThemeClass(classe: string){
    if(this.theme_style){
      return classe;
    }
    return classe+ "-dark";
   }

}
