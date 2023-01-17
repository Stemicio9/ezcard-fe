import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalConfig, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class GenericModalComponent implements OnInit {

  @ViewChild('genericModal') private modalContent!: TemplateRef<GenericModalComponent>
  @Output() newConfirmationEvent = new EventEmitter<string>();
  @Input() modalStyle: any;
  @Input() modalTitle: any;
  @Input() modalBody: any;
  @Input() modalButtonColor: any;

  private modalRef!: NgbModalRef;
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent, { size: 'sm' })
      this.modalRef.result.then((result) => {
        console.log(result);
        this.newConfirmationEvent.emit(result);
      }, (reason) => {
        console.log(reason);
      });
    })
  }

}
