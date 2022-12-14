import {Component, Input, OnInit} from '@angular/core';
import {MediaContainer} from "../../entities/media-container";
import {UtilityService} from "../../services/utility.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-profile-container-partner',
  templateUrl: './profile-container-partner.component.html',
  styleUrls: ['./profile-container-partner.component.css']
})
export class ProfileContainerPartnerComponent implements OnInit {

  @Input() partnerArray: MediaContainer[] = [];
  allFiles: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 50,
    responsive: { // responsive options
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false,
    rewind: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000
  }

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    for (const element of this.partnerArray) {
      this.utilityService.downloadAndInsert(element).subscribe((value: any) => {
        this.allFiles.push(value);
      });
    }
  }

}
