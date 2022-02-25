import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/ibro.model';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent implements OnInit {

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
  }

  get items() {
    return this.carritoService.items;
  }

  get total() {
    return this.carritoService.items.map(i => i.precio).reduce((i1, i2) => i1 + i2, 0);
  }

  removerLibroDelCarrito(libro: Libro) {
    this.carritoService.removerItem(libro);

  }

}
