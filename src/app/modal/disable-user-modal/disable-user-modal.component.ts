import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-disable-user-modal',
  templateUrl: './disable-user-modal.component.html',
  styleUrls: ['./disable-user-modal.component.css']
})
export class DisableUserModalComponent implements OnInit {

  @Input() public data: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  public message = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.defineMessageString();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  private defineMessageString() {
    this.message = this.data.enabled ? `Vuoi disabilitare il profilo di "${this.data.username}"?` : `Vuoi abilitare il profilo di "${this.data.username}"?`;
  }

  disableUser() {
    this.passEntry.emit();
    this.closeModal();
  }
}
