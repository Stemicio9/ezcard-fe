import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfileModalComponent} from "../../modal/profile-modal/profile-modal.component";
import {ContactsModalComponent} from "../../modal/contacts-modal/contacts-modal.component";
import {SocialModalComponent} from "../../modal/social-modal/social-modal.component";
import {CompanyModalComponent} from "../../modal/company-modal/company-modal.component";
import {PresentationModalComponent} from '../../modal/presentation-modal/presentation-modal.component';
import {GalleryModalComponent} from '../../modal/gallery-modal/gallery-modal.component';
import {PartnerModalComponent} from '../../modal/partner-modal/partner-modal.component';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileDarkComponent} from '../profile-dark/profile-dark.component';
import {ChangeImageModalComponent} from '../../modal/change-image-modal/change-image-modal.component';
import {ProfileService} from "../../services/profile.service";
import {UtilityService} from "../../services/utility.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titlesFirstSection: string[] = ['Profilo', 'Social', 'Contatti', 'Azienda', 'Presentazione', 'Galleria', 'Partner'];
  titlesSecondSection: string[] = ['Statistiche', 'Impostazioni', 'Profilo utente', 'Profilo utente dark']
  descriptionsFirstSection: string[] = ['Nome, Compagnia, ecc.', 'Linkedin, Facebook, Instagram', 'Telefono, Mail, Sito web', 'Sito web, Telefono, Indirizzo', 'Carica i tuoi file', 'Carica i tuoi progetti', 'Carica i tuoi partner'];
  descriptionsSecondSection: string[] = ['Visite, Click, ecc.', 'Email, Lingua, ecc.'];
  imageLinksFirstSection: string[] = ["assets/user-dark-rounded-icon.png", "assets/social-dark-rounded-icon.png", "assets/contacts-dark-rounded-icon.png", "assets/company-dark-rounded-icon.png", "assets/presentation-dark-rounded-icon.png", "assets/gallery-dark-rounded-icon.png", "assets/partner-dark-rounded-icon.png"];
  imageLinksSecondSection: string[] = ["assets/stats-dark-rounded-icon.png", "assets/settings-dark-rounded-icon.png", "assets/user-dark-rounded-icon.png", "assets/user-dark-rounded-icon.png"];
  modalList: any[] = [ProfileModalComponent, SocialModalComponent, ContactsModalComponent, CompanyModalComponent, PresentationModalComponent, GalleryModalComponent, PartnerModalComponent, ProfileComponent, ProfileDarkComponent];
  routerLinkList: string[] = ['/stats', '/settings', '/profile/:id', '/profile-dark/:id'];
  closeResult = '';

  // true = light theme, false = dark theme
  theme_style = true;

  constructor(private modalService: NgbModal, private profileService: ProfileService, private utilityService: UtilityService) {
  }

  openGenericModal(content: any) {
    this.modalService.open(content, {
      size: 'lg',
      centered: true,
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  changeImage = ChangeImageModalComponent;

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
    this.loadProfileImage();
  }

  formatDate() {
    let datePicker = document.getElementById("dateOfBirth");
    console.log(datePicker);
    datePicker?.setAttribute("format", "dd/MM/yyyy");
  }


  getThemeClass(classe: string) {
    if (this.theme_style) {
      return classe;
    }
    return classe + "-dark";
  }


  onChange($event: Event, type: string) {
    //Take file from event and call rest api to upload file
    let file = ($event.target as HTMLInputElement).files![0];
    file.arrayBuffer().then((buffer: ArrayBuffer) => {
      const a = this.utilityService.createImageFromBlob(buffer, file);
      this.profileService.updateMedia([a], type).subscribe(() => {
        this.loadProfileImage();
      })
    });
  }

  loadProfileImage() {
    this.profileService.getMedia('profile').subscribe((res: any) => {
      if (res.length > 0) {
        document.getElementById("profileImage")?.setAttribute("src", res[0].url);
      }
    });
    this.profileService.getMedia('cover').subscribe((res: any) => {
      if (res.length > 0) {
        document.getElementById("coverImage")?.setAttribute("src", res[0].url);
      }
    });
  }
}
