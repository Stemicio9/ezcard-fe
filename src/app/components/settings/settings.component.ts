import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string ): void{
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
  }

}
