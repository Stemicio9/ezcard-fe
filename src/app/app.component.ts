import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ezcard-fe';

  showHeader = false;
  showHomeIcon = false;
  pageTitle = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setupHeader(val);
        this.setupPageTitle();
      }
    });
  }

  setupHeader(val: any) {
    this.showHeader =
      val.url.includes('home') ||
      val.url.includes('settings') ||

      val.url.includes('stats');
    this.showHomeIcon =
      val.url.includes('settings') ||
      val.url.includes('stats')

  }

  setupPageTitle(){
    let route: ActivatedRoute = this.router.routerState.root;
    let routeTitle = '';
    while (route!.firstChild) {
      route = route.firstChild;
    }
    if (route.snapshot.data['title']) {
      routeTitle = route!.snapshot.data['title'];
    }
    this.pageTitle = routeTitle;
  }
}
