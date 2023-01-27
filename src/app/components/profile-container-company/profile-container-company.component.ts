import {Component, Input, OnInit} from '@angular/core';
import {CompanyContainer} from "../../entities/company-container";
import {socialMapLightTheme} from "../../utils/social-map";
import {ContactContainer} from "../../entities/contact-container";

@Component({
  selector: 'app-profile-container-company',
  templateUrl: './profile-container-company.component.html',
  styleUrls: ['./profile-container-company.component.css']
})
export class ProfileContainerCompanyComponent implements OnInit {

  @Input() companyArray: CompanyContainer[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  formatSocialIcon(value: string | undefined) {
    if (value != undefined) {
      return socialMapLightTheme[value];
    }
    return "";
  }

  formatHref(name: string, value: string) {
    switch (name) {
      case "Telefono":
        return "tel:" + value;
      case "Email":
        return "mailto:" + value;
      case "SitoWeb":
        return this.autoAddProtocol(value);
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
    if (parser.protocol !== 'http:') {
      hrefCopy = 'http://' + href;
    }
    return hrefCopy;
  };
}
