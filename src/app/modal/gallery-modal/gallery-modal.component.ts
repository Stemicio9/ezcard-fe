import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from "../../services/profile.service";
import {MediaContainer} from "../../entities/media-container";
import {UtilityService} from "../../services/utility.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {

  @Input() public data: any;

  allFiles: any[] = [];
  filesNotInCharge: File[] = [];
  mediaContainerList: MediaContainer[] = [];



  constructor(private modalService: NgbModal,
              private profileService: ProfileService,
              private utilityService: UtilityService,
              private sanitizer:DomSanitizer) { }


   ngOnInit() {
    this.profileService.getGallery().subscribe(
       (body: any) => {
        this.mediaContainerList = body;
        for (var element of this.mediaContainerList) {
          this.downloadAndInsert(element.fileLink!, element.fileName!, element.fileType!);
        }
      },
      (error: any) => {
        //todo manage error
        console.log(error);
      }
    );
  }

  downloadAndInsert(fileLink: string, fileName: string, fileType: string){
    this.utilityService.downloadFileFromUrl(fileLink).subscribe(result => {
      console.log("DIMENSIONE DEL FILE " + fileName);
      console.log(result.byteLength);
      var file = new File([result], fileName, {type: fileType});
      this.createImageFromBlob(result, file);
    });
  }

  createImageFromBlob(image: ArrayBuffer, file: File) {
    var imageType = file.name.includes("png") ? "png" : "jpeg";
    var link = this.sanitize('data:image/' + imageType + ';charset=utf-8;base64, ' + this._arrayBufferToBase64(image));
    this.allFiles.push({file: file, link: link});
  }

  _arrayBufferToBase64(data:ArrayBuffer){
    return btoa(String.fromCharCode(...new Uint8Array(data)))
  }


  // old version
  /*_arrayBufferToBase64( buffer : ArrayBuffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  } */

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  removeFile(i: number){
    this.allFiles.splice(i, 1);
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
