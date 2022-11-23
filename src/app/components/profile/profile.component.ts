import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/entities/profile';
import { ProfileService } from 'src/app/services/profile.service';

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
