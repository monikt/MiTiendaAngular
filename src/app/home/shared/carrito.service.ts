import { Injectable } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/ibro.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private key = 'mitiendaweb0222_carrito';

  private _items: Libro[] = [];
  constructor() {
    const carritoString = localStorage.getItem(this.key);
    this._items = carritoString ? JSON.parse(carritoString) : [];
   }

   get items() {
    return this._items;
  }

  agregarItem(libro: Libro) {
    this._items.push(libro);
    this.guardarEnLocalStorage();
  }

  removerItem(libro: Libro) {
    this._items = this._items.filter(i => i.id != libro.id);
    this.guardarEnLocalStorage();
  }

  removerItems() {
    this._items = [];
    this.guardarEnLocalStorage();
  }

  itemYaExiste(libro: Libro) {
    return this._items.findIndex(i => i.id == libro.id) >= 0;
  }

  guardarEnLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this._items));
  }

}
