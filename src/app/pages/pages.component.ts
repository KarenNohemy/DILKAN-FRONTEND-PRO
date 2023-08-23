import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  pageTitle: string = 'Mis Proyectos'; // Título predeterminado

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Obtén el título de los datos de la ruta activa y actualiza pageTitle
      this.pageTitle = this.getTituloDesdeRuta(this.activatedRoute);
    });
  }

  private getTituloDesdeRuta(ruta: ActivatedRoute): string {
    while (ruta.firstChild) {
      ruta = ruta.firstChild;
    }
    return ruta.snapshot.data['title'] || 'Mis Proyectos';
  }
}
