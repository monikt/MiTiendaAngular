import { Component, OnInit } from '@angular/core';
import { LibroService } from '../shared/libro.service';
import { Libro } from '../shared/ibro.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent implements OnInit {

  libros?: Libro[];
  constructor(
    private libroservice: LibroService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.libroservice.listar()
      .subscribe(libros => {
        console.log('libros recibidos', libros);
        this.libros = libros;
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

}
