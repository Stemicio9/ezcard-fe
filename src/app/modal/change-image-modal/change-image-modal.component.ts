import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-change-image-modal',
  templateUrl: './change-image-modal.component.html',
  styleUrls: ['./change-image-modal.component.css']
})
export class ChangeImageModalComponent implements OnInit {

  @Output() imageChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  onChange($event: Event, profile: string) {
    this.imageChanged.emit({event: $event, profile: profile});
  }
}
