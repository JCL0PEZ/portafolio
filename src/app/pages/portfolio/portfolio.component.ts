import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  productos: Producto[];

  constructor(public productService: ProductosService) { }

  ngOnInit() {
    this.getProductos();
  }

  async getProductos() {
    await this.productService.getData().subscribe((productos: Producto[]) => {
          this.productos = productos;
     });
  }

}
