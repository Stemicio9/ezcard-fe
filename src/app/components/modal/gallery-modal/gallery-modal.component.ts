import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {

  @Input() public data: any;

  allFiles: File[] = [];


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
      this.allFiles.push(file);
    }
}

}
