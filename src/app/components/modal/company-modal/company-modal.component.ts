import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { Social } from 'src/app/entities/social';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.css']
})
export class CompanyModalComponent implements OnInit {

  @Input() public data: any;

 totalSocial1: Social[] = [
    new Social('Whatsapp', 'assets/whatsapp-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-icon.png', 'Facebook'),
    new Social('Instagram', 'assets/linkedin-icon.png', 'Instagram'),
    new Social('TikTok', 'assets/tik-tok-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-icon.png', 'Linkedin'),
    new Social('YouTube', 'assets/linkedin-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/linkedin-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/linkedin-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/linkedin-icon.png', 'Behance'),
  ];
  totalSocial2: Social[] = [
    new Social('Whatsapp', 'assets/whatsapp-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-icon.png', 'Facebook'),
    new Social('Instagram', 'assets/linkedin-icon.png', 'Instagram'),
    new Social('TikTok', 'assets/tik-tok-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-icon.png', 'Linkedin'),
    new Social('YouTube', 'assets/linkedin-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/linkedin-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/linkedin-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/linkedin-icon.png', 'Behance'),
  ];
   totalSocial3: Social[] = [
    new Social('Whatsapp', 'assets/whatsapp-icon.png', 'Whatsapp'),
    new Social('Facebook', 'assets/facebook-icon.png', 'Facebook'),
    new Social('Instagram', 'assets/linkedin-icon.png', 'Instagram'),
    new Social('TikTok', 'assets/tik-tok-icon.png', 'TikTok'),
    new Social('Linkedin', 'assets/linkedin-icon.png', 'Linkedin'),
    new Social('YouTube', 'assets/linkedin-icon.png', 'YouTube'),
    new Social('Twitter', 'assets/linkedin-icon.png', 'Twitter'),
    new Social('Pinterest', 'assets/linkedin-icon.png', 'Pinterest'),
    new Social('Behance', 'assets/linkedin-icon.png', 'Behance'),
  ];

  dropdownSocial1: Social[] = [];
  dropdownSocial2: Social[] = [];
  dropdownSocial3: Social[] = [];


  userSocial1: string[] = ['Whatsapp', 'Facebook', 'Linkedin', 'TikTok'];

  userSocial2: string[] = ['Whatsapp', 'Facebook', 'Linkedin', 'TikTok'];

  userSocial3: string[] = ['Whatsapp', 'Facebook', 'Linkedin', 'TikTok'];

  tabs = [1];
	counter = this.tabs.length + 1;

	active:any;

	close(event: MouseEvent, toRemove: number) {
		this.tabs = this.tabs.filter((id) => id !== toRemove, this.counter--);
		event.preventDefault();
		event.stopImmediatePropagation();

	}

	add(event: MouseEvent) {
		this.tabs.push(this.counter++);
		event.preventDefault();
	}



  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dropdownSocial1 = this.removeSelectedSocial1();
    this.dropdownSocial2 = this.removeSelectedSocial2();
    this.dropdownSocial3 = this.removeSelectedSocial3();

  }





  checkName1(currentName: string | undefined): boolean {
    if (currentName) {
      for (const s of this.userSocial1) {
        if (s === currentName) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  checkName2(currentName: string | undefined): boolean {
    if (currentName) {
      for (const s of this.userSocial2) {
        if (s === currentName) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
  checkName3(currentName: string | undefined): boolean {
    if (currentName) {
      for (const s of this.userSocial3) {
        if (s === currentName) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  closeModal() {
    this.modalService.dismissAll();
  }








  addInput1(social: any) {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <div class="col-md-12">
      <div class="input-group mb-md-5 mb-3">
        <img style="margin-right: 0.5rem" class="icon-size" src="${social.iconPath}">
        <input placeholder="${social.placeholder}" id="whatsapp" class="form-control" style="border-radius: 0.25rem;"/>
      </div>
    </div>
    `;
    document.querySelector('.showInputField')?.appendChild(row);



    this.userSocial1 = [...this.userSocial1, social.name];
    this.dropdownSocial1 = [];
    this.dropdownSocial1 = this.removeSelectedSocial1();
  }

  addInput2(social: any) {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <div class="col-md-12">
      <div class="input-group mb-md-5 mb-3">
        <img style="margin-right: 0.5rem" class="icon-size" src="${social.iconPath}">
        <input placeholder="${social.placeholder}" id="whatsapp" class="form-control" style="border-radius: 0.25rem;"/>
      </div>
    </div>
    `;
    document.querySelector('.showInputField')?.appendChild(row);



    this.userSocial2 = [...this.userSocial2, social.name];
    this.dropdownSocial2 = [];
    this.dropdownSocial2 = this.removeSelectedSocial2();
  }

  addInput3(social: any) {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <div class="col-md-12">
      <div class="input-group mb-md-5 mb-3">
        <img style="margin-right: 0.5rem" class="icon-size" src="${social.iconPath}">
        <input placeholder="${social.placeholder}" id="whatsapp" class="form-control" style="border-radius: 0.25rem;"/>
      </div>
    </div>
    `;
    document.querySelector('.showInputField')?.appendChild(row);



    this.userSocial3 = [...this.userSocial3, social.name];
    this.dropdownSocial3 = [];
    this.dropdownSocial3= this.removeSelectedSocial3();
  }









  removeSelectedSocial1(){
    let a = Array.from(this.totalSocial1);
    for (let i = 0; i < this.totalSocial1.length; i++) {
      const currentName = this.totalSocial1[i].name;
      const cond = this.checkName1(currentName);
      if (cond) {
        const shadowList = a.map(a =>{return a.name});
        const index = shadowList.indexOf(currentName);
        if(index > -1){
          a.splice(index, 1);
        }
      }
    }
    return a;
  }
  removeSelectedSocial2(){
    let a = Array.from(this.totalSocial2);
    for (let i = 0; i < this.totalSocial2.length; i++) {
      const currentName = this.totalSocial2[i].name;
      const cond = this.checkName2(currentName);
      if (cond) {
        const shadowList = a.map(a =>{return a.name});
        const index = shadowList.indexOf(currentName);
        if(index > -1){
          a.splice(index, 1);
        }
      }
    }
    return a;
  }
   removeSelectedSocial3(){
    let a = Array.from(this.totalSocial3);
    for (let i = 0; i < this.totalSocial3.length; i++) {
      const currentName = this.totalSocial3[i].name;
      const cond = this.checkName3(currentName);
      if (cond) {
        const shadowList = a.map(a =>{return a.name});
        const index = shadowList.indexOf(currentName);
        if(index > -1){
          a.splice(index, 1);
        }
      }
    }
    return a;
  }

}
