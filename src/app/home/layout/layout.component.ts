import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {

  }

  get items() {
    return this.carritoService.items;
  }

}
