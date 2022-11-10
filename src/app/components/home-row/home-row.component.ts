import {Component, Input, OnInit} from '@angular/core';
import { ProfileModalComponent } from '../modal/profile-modal/profile-modal.component';

@Component({
  selector: 'app-home-row',
  templateUrl: './home-row.component.html',
  styleUrls: ['./home-row.component.css']
})
export class HomeRowComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageLink: string = '';
  @Input() modalType: any = '';


  constructor() { }

  ngOnInit(): void {
  }

}
