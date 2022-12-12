import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-image-modal',
  templateUrl: './change-image-modal.component.html',
  styleUrls: ['./change-image-modal.component.css']
})
export class ChangeImageModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
