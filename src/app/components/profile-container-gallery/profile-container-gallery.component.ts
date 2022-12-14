import {Component, Input, OnInit} from '@angular/core';
import {MediaContainer} from "../../entities/media-container";
import {UtilityService} from "../../services/utility.service";

@Component({
  selector: 'app-profile-container-gallery',
  templateUrl: './profile-container-gallery.component.html',
  styleUrls: ['./profile-container-gallery.component.css']
})
export class ProfileContainerGalleryComponent implements OnInit {
  @Input() galleryArray: MediaContainer[] = [];
  allFiles: any[] = [];
  constructor(private utilityService: UtilityService) {
  }
  ngOnInit(): void {
    for (const element of this.galleryArray) {
      this.utilityService.downloadAndInsert(element).subscribe((value: any) => {
        this.allFiles.push(value);
      });
    }
  }
}
