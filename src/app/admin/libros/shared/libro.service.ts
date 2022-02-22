import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro, LibroPage } from './ibro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${environment.apiBase}/admin/libros/listar`);
  }
  paginar( size: number = 5, page: number = 0) :Observable<LibroPage>{
    let params = new HttpParams();
    params = params.append('size',size);
    params = params.append('page',page);
    params = params.append('sort','fechaCreacion,desc');
    return this.http.get<LibroPage>(`${environment.apiBase}/admin/libros`,{params: params});

  }
  obtener(id: number) :Observable <Libro>{
    return this.http.get<Libro>(`${environment.apiBase}/admin/libros/${id}`);
  }

  crear(libro:Libro) :Observable <Libro> {
    return this.http.post<Libro>(`${environment.apiBase}/admin/libros/`,libro);

  }
  actualizar(id: number, libro:Libro): Observable<Libro>{
    return this.http.put<Libro>(`${environment.apiBase}/admin/libros/${id}`,libro);

  }
  eliminar(id: number):Observable<Object>{
    return this.http.delete<Libro>(`${environment.apiBase}/admin/libros/${id}`);
  }

  subirArchivo(formData: FormData) {
    return this.http.post(`${environment.apiBase}/assets/upload`, formData);
  }
}
