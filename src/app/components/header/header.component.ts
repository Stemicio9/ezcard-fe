import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('showHeader') showHeader = false;
  @Input('showHomeIcon') showHomeIcon = false;
  @Input('pageTitle') pageTitle = '';

  constructor() {}

  ngOnInit(): void {}
}
