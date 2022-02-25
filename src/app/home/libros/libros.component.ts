import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/ibro.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];
  page = 0;
  last = false;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getLibros()
      .subscribe(libroPage => {
        this.page = libroPage.number;
        this.last = libroPage.last;
        this.libros = libroPage.content;
      })
  }
  cargarMasLibros() {
    if (this.last) return;

    this.page++;

    this.homeService.getLibros(this.page)
      .subscribe(libroPage => {
        this.page = libroPage.number;
        this.last = libroPage.last;
        this.libros.push(...libroPage.content)
      })
  }

}
