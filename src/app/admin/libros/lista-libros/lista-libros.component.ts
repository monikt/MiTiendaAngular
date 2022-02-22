
import { Component, OnInit } from '@angular/core';
import { LibroService } from '../shared/libro.service';
import { Libro, LibroPage } from '../shared/ibro.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent implements OnInit {

  libros?: Libro[];
  libroPage?: LibroPage;
  displayedColumns: string[] = ['titulo', 'precio', 'fechaCreacion', 'acciones'];

  constructor(
    private libroservice: LibroService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.libroservice.paginar()
      .subscribe(libroPage => {
        console.log('libros recibidos', libroPage);
        this.libroPage = libroPage;
      })
  }

  eliminar(libro: Libro) {

    if (window.confirm("¿Estás seguro de eliminar este libro?")) {

      this.libroservice.eliminar(libro.id)
        .subscribe(() => {
          this.getAll()
        })
      window.alert("Se ha eliminado de manera correcta el libro")

    }

  }
  paginarLibros(event: PageEvent) {
    const page = event.pageIndex;
    const size = event.pageSize;

    this.libroservice.paginar(size, page)
      .subscribe(libroPage => {
        this.libroPage = libroPage;
      })
  }

}
