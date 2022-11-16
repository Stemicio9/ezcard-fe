import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProfileModalComponent} from "../modal/profile-modal/profile-modal.component";
import {ContactsModalComponent} from "../modal/contacts-modal/contacts-modal.component";
import {SocialModalComponent} from "../modal/social-modal/social-modal.component";
import {CompanyModalComponent} from "../modal/company-modal/company-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titlesFirstSection: string[] = ['Profilo', 'Contatti', 'Social', 'Azienda'];
  titlesSecondSection: string[] = ['Statistiche', 'Impostazioni']
  descriptionsFirstSection: string[] = ['Nome, Compagnia, ecc.', 'Telefono, Mail, Sito web', 'Linkedin, Facebook, Instagram', 'Sito web, Telefono, Indirizzo'];
  descriptionsSecondSection: string[] = ['Visite, Click, ecc.', 'Email, Lingua, ecc.'];
  imageLinksFirstSection: string[] = ["assets/user-icon.png","assets/email-icon.png","assets/share-icon.png","assets/azienda-icon.png"];
  imageLinksSecondSection: string[] = ["assets/stats-icon.png","assets/settings-icon.png"];
  idModalList: any[] = [ProfileModalComponent, ContactsModalComponent, SocialModalComponent, CompanyModalComponent];
  routerLinkList: string[] = ['/stats', '/settings'];
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  openGenericModal(content:any){
    this.modalService.open(content, {size: 'lg',centered:true, ariaLabelledBy: 'modal-basic-title'}).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
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
}
