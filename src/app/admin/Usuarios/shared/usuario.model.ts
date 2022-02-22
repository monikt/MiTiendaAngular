export interface UsuarioPage {
  content:          Usuario[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Usuario {
  id:                 number;
  nombres:            string;
  apellidos:          string;
  nombreCompleto:     string;
  email:              string;
  password:           string;
  rol:                string;
  fechaCreacion:      Date;
  fechaActualizacion: null;
}

export interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  unsorted: boolean;
  sorted:   boolean;
}
 export interface Rol {
  value: string;
  viewValue: string;
}
