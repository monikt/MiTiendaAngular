import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/ibro.model';
import { HomeService } from '../shared/home.service';
import { CarritoService } from '../shared/carrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styles: [
  ]
})
export class DetallesLibroComponent implements OnInit {
  libro?: Libro;
  constructor(
    private homeService: HomeService,
    private carritoService: CarritoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;

    this.homeService.getLibro(slug)
      .subscribe(libro => {
        this.libro = libro;
      })
  }

  agregarLibroAlCarrito() {
    this.carritoService.agregarItem(this.libro!);
  }

  removerLibroDelCarrito() {
    this.carritoService.removerItem(this.libro!);
  }

  libroYaEstaEnCarrito() {
    return this.carritoService.itemYaExiste(this.libro!);
  }

}
