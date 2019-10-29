import { Producto } from 'src/app/interfaces/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[];
  productosFilter: Producto[];

  constructor(public httpClient: HttpClient) {
    console.log('Servicio de productos para la pagina');
  }

  getData() {
    return this.httpClient.get('https://angular-html-d5edd.firebaseio.com/productos_idx.json');
  }

  getProducto(id: string) {
    return this.httpClient.get(`https://angular-html-d5edd.firebaseio.com/productos/${id}.json`);
  }

  getProductos() {
    return new Promise( (complete, reject) => {
      this.getData().subscribe( (productos: Producto[]) => {
        this.productos = productos;
        complete();
     });
    });
  }


  filter(termino: string) {
    if (!this.productos) {
      this.getProductos().then( (_) => {
        this.filterProductos(termino);
      });
    } else {
      this.filterProductos(termino);
    }
  }

  private filterProductos(termino: string) {
      // this.productosFilter = this.productos.filter(producto => {
      //   if (producto.categoria.indexOf(termino) >= 0) {
      //     return true;
      //   }
      // });
      this.productosFilter = new Array();
      this.productos.forEach(producto => {
        if (producto.categoria.toUpperCase().indexOf(termino.toUpperCase()) >= 0 ||
            producto.titulo.toUpperCase().indexOf(termino.toUpperCase()) >= 0) {
          this.productosFilter.push(producto);
        }
      });
  }

}
