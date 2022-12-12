import {SocialContainer} from "./social-container";
import {Social} from "./social";

export class CompanyContainer {
   companyName: string;
   vatNumber: string;
   address: string;
   phoneNumber: string;
   email: string;
   codeSDI: string;
   pec: string;
   socials : SocialContainer[];


  constructor(
    userSocial?: Social[],
    companyName?: string,
    vatNumber?: string,
    address?: string,
    phoneNumber?: string,
    email?: string,
    codeSDI?: string,
    pec?: string,
  )


  {

    this.socials = userSocial ?? [];
    this.companyName = companyName ?? '';
    this.vatNumber = vatNumber ?? '';
    this.address = address ?? '';
    this.phoneNumber = phoneNumber ?? '';
    this.email = email ?? '';
    this.codeSDI = codeSDI ?? '';
    this.pec = pec ?? '';

  }

}
