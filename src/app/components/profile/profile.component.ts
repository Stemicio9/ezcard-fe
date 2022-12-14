import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Profile} from 'src/app/entities/profile';
import {ProfileService} from 'src/app/services/profile.service';
import {socialMapLightTheme} from "../../utils/social-map";
import {contactMapLightTheme} from "../../utils/contact-map";
import {ContactContainer} from "../../entities/contact-container";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string | null = '';
  profile: Profile = new Profile();
  showProfile = false;
  ezCardWebsiteLink = "https://www.ezcard.it";

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.username != null) {
      this.profileService.getProfileShown(this.username).subscribe(
        (data: any) => {
          this.profile = data;
          this.showProfile = true;
        }, (error) => {
          console.log(error);
        });
    }
  }


  formatSocialIcon(value: string | undefined) {
    if (value != undefined) {
      return socialMapLightTheme[value];
    }
    return "";
  }

  formatContactIcon(value: string | undefined) {
    if (value != undefined) {
      return contactMapLightTheme[value];
    }
    return "";
  }

  formatHref(c: ContactContainer) {
    switch (c.name) {
      case "Telefono":
        return "tel:" + c.value;
      case "Email":
        return "mailto:" + c.value;
      case "Sito web":
        return c.value;
      default:
        return "";
    }

  }
}
