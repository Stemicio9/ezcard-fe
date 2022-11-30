import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Profile } from 'src/app/entities/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string | null = '';
  profile?: Profile;
  editPartner = false;
  editGallery = false;
  editCompany = false;
  editContacts = false;
  partner="PARTNER";
  gallery="GALLERIA";
  company="AZIENDA";
  contacts="CONTATTI";


  // this variable represents the state of the profile object, if false there is an error on retrieving the profile
  dataState = true;

  slidesStore = [
    {
      id: 'id1',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id2',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id3',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id4',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id5',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id6',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id7',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },
    {
      id: 'id8',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },{
      id: 'id9',
      src: '/assets/black-logo.png',
      alt: 'alt',
      title: ''
    },

  ]



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items: 3,
    margin: 50,
    responsive: { // responsive options
      0: {
        items: 3
      },
      500: {
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
    autoplayTimeout:3000
  }

  ezCardWebsiteLink = "https://www.ezcard.it";

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
