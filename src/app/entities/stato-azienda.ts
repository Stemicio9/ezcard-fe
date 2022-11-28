import { Social } from "./social";

export class StatoAzienda {

  dropdownSocial?: Social[];
  userSocial?: Social[];
  name?: string;
  pIva?: string;
  address?: string;
  phone?: string;
  email?: string;
  sdiCode?: string;
  pec?: string;




  constructor(
    dropdownSocial?: Social[],
    userSocial?: Social[],
    name?: string,
    pIva?: string,
    address?: string,
    phone?: string,
    email?: string,
    sdiCode?: string,
    pec?: string,
    )


    {
    this.dropdownSocial = dropdownSocial;
    this.userSocial = userSocial;
    this.name = name;
    this.pIva = pIva;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.sdiCode = sdiCode;
    this.pec = pec;

  }




}
