import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titlesFirstSection: string[] = ['Profilo', 'Contatti', 'Social', 'Azienda'];
  titlesSecondSection: string[] = ['Statistiche', 'Impostazioni', 'Password'];
  descriptionsFirstSection: string[] = ['Nome, Compagnia, ecc.', 'Telefono, Mail, Sito web', 'Linkedin, Facebook, Instagram', 'Sito web, Telefono, Indirizzo'];
  descriptionsSecondSection: string[] = ['Visite, Click, ecc.','Email, Lingua, ecc.', 'Impostazioni password'];
  imageLinksFirstSection: string[] = ["assets/user-icon.png","assets/email-icon.png","assets/share-icon.png","assets/azienda-icon.png"];
  imageLinksSecondSection: string[] = ["assets/stats-icon.png","assets/settings-icon.png","assets/password-icon.png"];


  constructor() { }

  ngOnInit(): void {
  }


}
