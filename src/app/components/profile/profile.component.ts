import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Profile} from 'src/app/entities/profile';
import {ProfileService} from 'src/app/services/profile.service';
import {socialMapLightTheme} from "../../utils/social-map";
import {contactMapLightTheme} from "../../utils/contact-map";
import {ContactContainer} from "../../entities/contact-container";
import {VCard, VCardEncoding, VCardFormatter} from "ngx-vcard";

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

  public vCard: VCard = {};
  public vCardEncoding: typeof VCardEncoding = VCardEncoding;
  public vCardString: string = VCardFormatter.getVCardAsString(this.vCard);

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.queryParamMap.get("id");
    if (this.username != null) {
      this.profileService.getProfileShown(this.username).subscribe(
        (data: any) => {
          this.profile = data;
          this.showProfile = true;
          this.buildVCard();
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

  private buildVCard() {
    this.vCard = {
      kind: 'individual',
      formattedName: {
        firstNames: this.profile.profileContainer.firstName,
        lastNames: this.profile.profileContainer.lastName
      },
      photo: this.profile.profileImage != null ? this.profile.profileImage.link : "",
      name: {
        lastNames: this.profile.profileContainer.lastName,
        firstNames: this.profile.profileContainer.firstName
      },
      organization: this.profile.companies.length > 0 ? this.profile.companies[0].companyName : "",
      title: this.profile.profileContainer.role,
      telephone: this.profile.contacts.filter(c => c.name === "Telefono").map(c => {return {value: c.value ?? "", param: {type: 'cell'}}}),
      email: this.profile.contacts.filter(c => c.name === "Email").map(c => {return {value: c.value ?? "", param: {type: 'work'}}}),
      note: this.profile.profileContainer.description
    };
    this.vCardString = VCardFormatter.getVCardAsString(this.vCard);
  }

}
