import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {LoadingService} from "./services/loading.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ezcard-fe';

  showHeader = false;
  showHomeIcon = false;
  showLogoutIcon = false;
  pageTitle = '';
  loading: boolean = false;

  constructor(private router: Router, private _loading: LoadingService) {}

  ngOnInit(): void {
    this.listenToLoading();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setupHeader(val);
        this.setupPageTitle();
      }
    });
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  setupHeader(val: any) {
    this.showHeader =
      val.url.includes('home') ||
      val.url.includes('settings') ||
      val.url.includes('administrator') ||
      val.url.includes('stats');
    this.showHomeIcon =
      val.url.includes('settings') ||
      val.url.includes('stats');
    this.showLogoutIcon =
      val.url.includes('home') ||
      val.url.includes('administrator');

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
