import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-partner-modal',
  templateUrl: './partner-modal.component.html',
  styleUrls: ['./partner-modal.component.css']
})
export class PartnerModalComponent implements OnInit {

  @Input() public data: any;

  allFiles: File[] = [];
  filesNotInCharge: File[] = [];


  constructor(private modalService: NgbModal, private profileService: ProfileService) { }


  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  fileSelected(event: any){
    this.droppedFiles(event.target.files);
  }


  droppedFiles(allFiles: any): void {
    const filesAmount = allFiles.length;

    for (let i = 0; i < filesAmount; i++) {
      const file = allFiles[i];
      if(this.allFiles.length > 14){
      this.filesNotInCharge.push(file);
      } else {
      this.allFiles.push(file);
      }
    }

    if(this.filesNotInCharge.length > 0){
      // Dobbiamo mostrare errore con messaggio e files non caricati
      console.log("CI SONO DEI FILE IN PIU");
      console.log(this.filesNotInCharge);
    }
}

  sendFiles(){
    this.profileService.updatePartner(this.allFiles).subscribe(
      (body: any) => {
        this.closeModal();
      },
      (error: any) => {
        //todo manage error
        console.log(error);
      }
    );
  }


}
