import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from "../../services/profile.service";
import {MediaContainer} from "../../entities/media-container";
import {UtilityService} from "../../services/utility.service";
import {GenericModalComponent} from "../generic-modal/generic-modal.component";

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {

  @Input() public data: any;
  @ViewChild('genericModal') private modalComponent!: GenericModalComponent;

  modalStyle: string = 'modal-style-danger ';
  modalTitle: string = 'Attenzione';
  modalBody: string = 'Vuoi davvero eliminare il file?';
  modalButtonColor: string = 'btn-danger';

  allFiles: any[] = [];
  filesNotInCharge: File[] = [];
  mediaContainerList: MediaContainer[] = [];
  threshold = 14;
  clickedIndex = -1;

  constructor(private modalService: NgbModal, private profileService: ProfileService, private utilityService: UtilityService) {}

  ngOnInit() {
    this.profileService.getMedia('gallery').subscribe(
      (body: any) => {
        this.mediaContainerList = body;
        for (const element of this.mediaContainerList) {
          this.utilityService.downloadAndInsert(element).subscribe((value: any) => {
            this.allFiles.push(value);
          });
        }
      },
      (error: any) => {
        //todo manage error
        console.log(error);
      }
    );
  }

  removeFile(i: number) {
    this.allFiles.splice(i, 1);
  }

  closeModal() {
    this.modalService.dismissAll();
  }


  choosedFiles(event: any) {
    this.droppedFiles(event.target.files);
  }

  droppedFiles(droppedFiles: any): void {
    const filesAmount = droppedFiles.length;

    console.log(droppedFiles);

    for (let i = 0; i < filesAmount; i++) {
      const file = droppedFiles[i];
      if (this.allFiles.length > this.threshold) {
        this.filesNotInCharge.push(file);
      } else {
        file.arrayBuffer().then((buffer: ArrayBuffer) => {
          this.allFiles.push(this.utilityService.createImageFromBlob(buffer, file));
        });
      }
    }

    if (this.filesNotInCharge.length > 0) {
      // Dobbiamo mostrare errore con messaggio e files non caricati
      console.log("CI SONO DEI FILE IN PIU");
      console.log(this.filesNotInCharge);
    }
  }

  sendFiles() {
    console.log(this.allFiles)
    this.profileService.updateMedia(this.allFiles, 'gallery').subscribe(
      (body: any) => {
        this.closeModal();
      },
      (error: any) => {
        //todo manage error
        console.log(error);
      }
    );
  }

  async openModal() {
    return await this.modalComponent.open();
  }

  getConfirmationValue(value: any) {
    if (value == 'Save click') {
      this.removeFile(this.clickedIndex);
      this.clickedIndex = -1;
    }
  }

  open(index: number) {
    this.clickedIndex = index;
    this.openModal().then(r => {});
  }


}
