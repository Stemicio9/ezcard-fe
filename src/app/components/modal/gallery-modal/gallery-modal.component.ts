import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from "../../../services/profile.service";
import {MediaContainer} from "../../../entities/media-container";
import {UtilityService} from "../../../services/utility.service";

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {

  @Input() public data: any;

  allFiles: File[] = [];
  filesNotInCharge: File[] = [];
  mediaContainerList: MediaContainer[] = [];


  constructor(private modalService: NgbModal, private profileService: ProfileService, private utilityService: UtilityService) { }


  async ngOnInit() {
    this.profileService.getGallery().subscribe(
       (body: any) => {
        this.mediaContainerList = body;
        console.log("ARRAY DA CERCARE");
        console.log(this.mediaContainerList);
        for (var element of this.mediaContainerList) {

          console.log("FACCIO LA FETCH DI ");
          console.log(element.fileName);
          this.utilityService.downloadFileFromUrl(element.fileLink!).subscribe(result => {
            var array = new Uint8Array(result);
            var file = new File([array], element.fileName!, {type: element.fileType!});
            console.log("INSERISCO FILE IN ALL FILES");
            console.log(file.name);
            this.allFiles.push(file);
          });



        }
      },
      (error: any) => {
        //todo manage error
        console.log(error);
      }
    );
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
    this.profileService.updateGallery(this.allFiles).subscribe(
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
