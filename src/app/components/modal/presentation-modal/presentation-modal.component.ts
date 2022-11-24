import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-presentation-modal',
  templateUrl: './presentation-modal.component.html',
  styleUrls: ['./presentation-modal.component.css']
})
export class PresentationModalComponent implements OnInit {


  allFiles: File[] = [];
  filesNotInCharge: File[] = [];


  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  droppedFiles(allFiles: any): void {
    const filesAmount = allFiles.length;

    for (let i = 0; i < filesAmount; i++) {
      const file = allFiles[i];
      if(this.allFiles.length > 2){
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

}
