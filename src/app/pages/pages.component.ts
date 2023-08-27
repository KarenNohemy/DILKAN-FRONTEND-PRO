import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  public titulo: string = '';

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
      )
      .subscribe(() => {
        this.titulo = this.getLastChildRouteData(this.router.routerState.snapshot.root)?.titulo || '';
        this.titleService.setTitle(this.titulo);
      });
  }

  private getLastChildRouteData(route: any): any {
    if (route.firstChild) {
      return this.getLastChildRouteData(route.firstChild);
    } else {
      return route.data;
    }
  }
}
