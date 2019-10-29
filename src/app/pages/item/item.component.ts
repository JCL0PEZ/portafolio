import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string;
  producto: ProductoDescripcion;
  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProducto(params.id);
    });
  }

  async getProducto(id: string) {
    await this.productoService.getProducto(id).subscribe( (producto: ProductoDescripcion) => {
      this.id = id;
      this.producto = producto;
    });
  }

}
