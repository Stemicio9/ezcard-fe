import { Social } from "./social";

export class StatoAzienda {

  dropdownSocial?: Social[];
  userSocial?: Social[];
  companyName?: string;
  vatNumber?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  codeSDI?: string;
  pec?: string;




  constructor(
    dropdownSocial?: Social[],
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
    this.dropdownSocial = dropdownSocial;
    this.userSocial = userSocial;
    this.companyName = companyName;
    this.vatNumber = vatNumber;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.codeSDI = codeSDI;
    this.pec = pec;

  }




}
