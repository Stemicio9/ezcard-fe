import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Profile} from 'src/app/entities/profile';
import {ProfileService} from 'src/app/services/profile.service';
import {socialMapLightTheme} from "../../utils/social-map";
import {contactMapLightTheme} from "../../utils/contact-map";
import {ContactContainer} from "../../entities/contact-container";
import {VCard, VCardEncoding, VCardFormatter} from "ngx-vcard";
import {UtilityService} from "../../services/utility.service";

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

  actualFELink = "http://195.231.85.62:5555/profile?id=";

  imageProfileUrl: string = "/assets/avatar-image.png";
  imageCoverUrl: string = "/assets/placeholder-image.png";

  public vCard: VCard = {};
  public vCardEncoding: typeof VCardEncoding = VCardEncoding;
  public vCardString: string = VCardFormatter.getVCardAsString(this.vCard);

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.queryParamMap.get("id");
    if (this.username != null) {
      this.profileService.getProfileShown(this.username).subscribe(
        (data: any) => {
          this.profile = data;
          this.loadProfileImage();
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
      case "SitoWeb":
        return this.autoAddProtocol(c.value!);
      //return "https://" + c.value;
      default:
        return "";
    }
  }

  getLocation = (href: string) => {
    const parser = document.createElement("a");
    parser.href = href;
    return parser;
  };

  autoAddProtocol = (href: string) => {
    let hrefCopy = href;
    const parser = this.getLocation(href);
    if (parser.protocol !== 'https:') {
      hrefCopy = 'https://' + href;
    }
    return hrefCopy;
  };

  loadProfileImage() {
    this.profileService.getMediaSecond('profile', this.profile.id).subscribe((res: any) => {

      if (res.length > 0) {
        this.utilityService.downloadAndInsertPublic(res[0]).subscribe((value: any) => {

          // document.getElementById("profileImage")?.setAttribute("src", value.link);
          this.imageProfileUrl = value.link;
        });
      }
    });
    this.profileService.getMediaSecond('cover', this.profile.id).subscribe((res: any) => {
      if (res.length > 0) {
        //document.getElementById("coverImage")?.setAttribute("src", res[0].url);
        this.utilityService.downloadAndInsertPublic(res[0]).subscribe((value: any) => {
          this.imageCoverUrl = value.link;
        });

      }
    });
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
      telephone: this.profile.contacts.filter(c => c.name === "Telefono").map(c => {
        return {value: c.value ?? "", param: {type: 'cell'}}
      }),
      email: this.profile.contacts.filter(c => c.name === "Email").map(c => {
        return {value: c.value ?? "", param: {type: 'work'}}
      }),
      workEmail: this.profile.companies.length > 0 ? this.profile.companies.map(c => {
        return c.email
      }) : [],
      note: this.profile.profileContainer.description,
      url: this.actualFELink + this.username
    };
    this.vCardString = VCardFormatter.getVCardAsString(this.vCard);
  }

}
