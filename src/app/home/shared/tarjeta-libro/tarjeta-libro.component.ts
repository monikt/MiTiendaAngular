import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/ibro.model';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-tarjeta-libro',
  templateUrl: './tarjeta-libro.component.html',
  styles: [
  ]
})
export class TarjetaLibroComponent implements OnInit {
  @Input() libroTarjeta!: Libro;
  constructor(
    private carritoService: CarritoService
  ) { }


  ngOnInit(): void {
  }
  agregarLibroAlCarrito() {
    this.carritoService.agregarItem(this.libroTarjeta);
  }

  removerLibroDelCarrito() {
    this.carritoService.removerItem(this.libroTarjeta);
  }

  libroYaEstaEnCarrito() {
    return this.carritoService.itemYaExiste(this.libroTarjeta);
  }

}
