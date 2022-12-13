import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from "../../services/profile.service";
import {MediaContainer} from "../../entities/media-container";
import {UtilityService} from "../../services/utility.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-presentation-modal',
  templateUrl: './presentation-modal.component.html',
  styleUrls: ['./presentation-modal.component.css']
})
export class PresentationModalComponent implements OnInit {

  @Input() public data: any;

  allFiles: any[] = [];
  filesNotInCharge: File[] = [];
  mediaContainerList: MediaContainer[] = [];
  threshold = 14;


  constructor(private modalService: NgbModal,
              private profileService: ProfileService,
              private utilityService: UtilityService,
              private sanitizer: DomSanitizer) {
  }


  ngOnInit() {
    this.profileService.getPresentation().subscribe(
      (body: any) => {
        this.mediaContainerList = body;
        for (const element of this.mediaContainerList) {
          this.downloadAndInsert(element);
        }
      },
      (error: any) => {
        //todo manage error
        console.log(error);
      }
    );
  }

  downloadAndInsert(element: any) {
    console.log(element.link);
    this.utilityService.downloadFileFromUrl(element.link).subscribe(result => {
      console.log("DIMENSIONE DEL FILE " + element.name, result.byteLength);
      const file = new File([result], element.name, {type: element.type});
      this.createImageFromBlob(result, file);
    });
  }

  createImageFromBlob(image: ArrayBuffer, file: File) {
    var imageType = file.name.includes("png") ? "png" : "jpeg";
    var link = this.sanitize('data:image/' + imageType + ';base64, ' + this._arrayBufferToBase64(image));
    this.allFiles.push({name: file.name, type: file.type, size: file.size, link: link, file:file});
  }

  _arrayBufferToBase64(data: ArrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(data);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  removeFile(i: number) {
    this.allFiles.splice(i, 1);
  }


  closeModal() {
    this.modalService.dismissAll();
  }


  fileSelected(event: any) {
    this.droppedFiles(event.target.files);
  }


  droppedFiles(droppedFiles: any): void {
    const filesAmount = droppedFiles.length;

    for (let i = 0; i < filesAmount; i++) {
      const file = droppedFiles[i];
      if (this.allFiles.length > this.threshold) {
        this.filesNotInCharge.push(file);
      } else {
        file.arrayBuffer().then((buffer: ArrayBuffer) => {
          this.createImageFromBlob(buffer, file);
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
    this.profileService.updatePresentation(this.allFiles).subscribe(
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
