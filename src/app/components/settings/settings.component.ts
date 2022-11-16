import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, AfterViewInit {

  activeAnchor = 'profiloAnchor';
  activeClassVoice = 'c-menu-link--active';

  idVoiceList: string[] = ['profilo', 'notifiche', 'aspetto', 'section4'];
  idAnchorList: string[] = ['profiloAnchor', 'notificheAnchor', 'aspettoAnchor', 'section4Anchor'];
  voiceMenuList: string[] = ['Profilo', 'Notifiche', 'Aspetto', 'Sezione4'];

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string, index: number): void{
    this.viewportScroller.scrollToAnchor(elementId);
    this.assignClass(index);
  }

  ngOnInit(): void {
    this.viewportScroller.setOffset([0,window.innerHeight*0.06]);
  }

  ngAfterViewInit(): void {
    let defaultAnchor = document.getElementById(this.activeAnchor);
    defaultAnchor?.classList.add(this.activeClassVoice);
  }

  assignClass(index: number){
    let oldAnchor = document.getElementById(this.activeAnchor);
    oldAnchor?.classList.remove(this.activeClassVoice);

    let newAnchor = document.getElementById(this.idAnchorList[index]);
    newAnchor?.classList.add(this.activeClassVoice);

    this.activeAnchor = this.idAnchorList[index];
  }


}
