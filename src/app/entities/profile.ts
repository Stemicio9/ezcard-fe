import {ProfileContainer} from "./profile-container";
import {SocialContainer} from "./social-container";
import {ContactContainer} from "./contact-container";
import {CompanyContainer} from "./company-container";
import {MediaContainer} from "./media-container";

export class Profile {
  id: string;
  username: string;
  profileContainer: ProfileContainer;
  socials: SocialContainer[];
  contacts: ContactContainer[];
  companies: CompanyContainer[];
  gallery: MediaContainer[];
  presentation: MediaContainer[];
  partner: MediaContainer[];

  constructor() {
    this.id = '';
    this.username = '';
    this.profileContainer = new ProfileContainer();
    this.socials = [];
    this.contacts = [];
    this.companies = [];
    this.gallery = [];
    this.presentation = [];
    this.partner = [];
  }
}
