import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Social } from 'src/app/entities/social';

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.css'],
})
export class SocialModalComponent implements OnInit {
  @Input() public data: any;

  totalSocial: Social[] = [
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

  dropdownSocial: Social[] = [];

  userSocial: string[] = ['Whatsapp', 'Facebook', 'Linkedin', 'TikTok'];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.dropdownSocial = this.removeSelectedSocial();
  }

  checkName(currentName: string | undefined): boolean {
    if (currentName) {
      for (const s of this.userSocial) {
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

  addInput(social: any) {
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

    this.userSocial = [...this.userSocial, social.name];
    this.dropdownSocial = [];
    this.dropdownSocial = this.removeSelectedSocial();
  }

  removeSelectedSocial(){
    let a = Array.from(this.totalSocial);
    for (let i = 0; i < this.totalSocial.length; i++) {
      const currentName = this.totalSocial[i].name;
      const cond = this.checkName(currentName);
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
