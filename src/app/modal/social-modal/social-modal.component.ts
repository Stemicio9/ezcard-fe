import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Social} from 'src/app/entities/social';
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.css'],
})
export class SocialModalComponent implements OnInit {


  totalSocial: Social[] = [
    new Social('', '/assets/whatsapp-dark-rounded-icon.png', 'Whatsapp'),
    new Social('', '/assets/facebook-dark-rounded-icon.png', 'Facebook'),
    new Social('', '/assets/tiktok-dark-rounded-icon.png', 'TikTok'),
    new Social('', '/assets/linkedin-dark-rounded-icon.png', 'Linkedin'),
    new Social('', '/assets/instagram-dark-rounded-icon.png', 'Instagram'),
    new Social('', '/assets/youtube-dark-rounded-icon.png', 'YouTube'),
    new Social('', '/assets/twitter-dark-rounded-icon.png', 'Twitter'),
    new Social('', '/assets/pinterest-dark-rounded-icon.png', 'Pinterest'),
    new Social('', '/assets/behance-dark-rounded-icon.png', 'Behance'),
  ];

  userSocial: Social[] = [];


  constructor(private modalService: NgbModal, private profileService: ProfileService) {}

  ngOnInit(): void {
    // per ora adattiamo i dati allo schifo che già esiste, quindi facciamo il match
    // dei nomi dei social con i nomi contenuti nella lista totalSocial
    this.profileService.getSocial().subscribe((result: any) => {
      console.log(result);
      if(result != undefined){
        this.fromSocialContainerToSocial(result);
      }
    });
  }


  closeModal() {
    this.profileService.updateSocial(this.fromSocialToSocialContainer()).subscribe((result: any) => {
      this.modalService.dismissAll();
    }, error => {
      // GESTIRE UN EVENTUALE ERRORE DI UPLOAD
      console.log(error);
      this.modalService.dismissAll();
    });

  }

  fromSocialToSocialContainer(){
    var result : any [] = [];
    for(let element of this.userSocial){
       result.push({name: element.placeholder, value: element.name});
    }
    return result;
  }

  fromSocialContainerToSocial(socialResult: any[]){
     for(let element of socialResult){
       console.log(element);
       this.userSocial.push(new Social(element.value, this.calculateIconPath(element.name), element.name));
     }
     console.log("THE COMPLETE USERSOCIAL ARRAY");
     console.log(this.userSocial);
  }

  calculateIconPath(other: string) : string {
    for(let element of this.totalSocial){
      if(element.placeholder?.toLowerCase() == other.toLowerCase()){
        return element.iconPath ?? "";
      }
    }
    // todo
    // this part should return a default icon
    return "";
  }




  addSocial(contact: any) {
    this.userSocial.push(contact);
    // Deleted the part of the code that removes the element from the totalSocial array
  /*  const index = this.totalSocial.indexOf(contact);
    this.totalSocial.splice(index,1); */
  }

  remove(element: any){
    const index = this.userSocial.indexOf(element);
    this.userSocial.splice(index,1);
    this.totalSocial.push(element);
  }


  calculateNameAttribute(element: any, index: number){
    if(element.name == undefined){
      return "Social " + index;
    }
    if(element.name.length == 0){
      return "Social " + index;
    }
    return element.name;
  }

}
