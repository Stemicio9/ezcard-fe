import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProfileService} from "../../../services/profile.service";
import {ProfileContainer} from "../../../entities/profile-container";

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  @Input() public data: any;


  profile: ProfileContainer = new ProfileContainer();


  constructor(private modalService: NgbModal, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((body: any) => {
      this.profile = body;
    });
  }

  onSave(){
    this.profileService.updateProfile(this.profile).subscribe((body: any) => {
      this.closeModal();
    }, error => {
      console.log(error);
      console.log("errore nell'invio del profilo");
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
