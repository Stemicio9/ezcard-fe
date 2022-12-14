import {Component, Input, OnInit} from '@angular/core';
import {CompanyContainer} from "../../entities/company-container";
import {socialMapLightTheme} from "../../utils/social-map";

@Component({
  selector: 'app-profile-container-company',
  templateUrl: './profile-container-company.component.html',
  styleUrls: ['./profile-container-company.component.css']
})
export class ProfileContainerCompanyComponent implements OnInit {

  @Input() companyArray: CompanyContainer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  formatSocialIcon(value: string | undefined) {
    if (value != undefined) {
      return socialMapLightTheme[value];
    }
    return "";
  }
}
