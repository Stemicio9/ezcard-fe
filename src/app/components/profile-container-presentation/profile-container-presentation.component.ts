import {Component, Input, OnInit} from '@angular/core';
import {MediaContainer} from "../../entities/media-container";

@Component({
  selector: 'app-profile-container-presentation',
  templateUrl: './profile-container-presentation.component.html',
  styleUrls: ['./profile-container-presentation.component.css']
})
export class ProfileContainerPresentationComponent implements OnInit {

  @Input() presentationArray: MediaContainer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
