import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productosFilter: Producto[];
  termino: string;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.termino = params.termino;
      this.productosService.filter(this.termino);
      this.productosFilter = this.productosService.productosFilter;
    });
  }

}
