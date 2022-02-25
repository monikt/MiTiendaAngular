import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/ibro.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit {
  ultimosLibros?: Libro[];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getUltimosLibros()
      .subscribe(ultimosLibros => {
        this.ultimosLibros = ultimosLibros;
      });
  }

}
