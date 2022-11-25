import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/entities/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

export class CarouselHolderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string | null = '';
  profile?: Profile;

  // this variable represents the state of the profile object, if false there is an error on retrieving the profile
  dataState = true;

  slidesStore = [
    {
      id: 'id',
      src: '',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id',
      src: '',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id',
      src: '',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id',
      src: '',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id',
      src: '',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id',
      src: '',
      alt: 'alt',
      title: ''
    }
  ]

  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.username != null) {
      this.profileService.getProfile(this.username).subscribe(
        (data: any) => {
          this.profile = data.body;
          this.dataState = true;
        }, (error) => {
          console.log(error);
          this.dataState = false
        });
    } else {
      this.dataState = false;
    }
  }




}
